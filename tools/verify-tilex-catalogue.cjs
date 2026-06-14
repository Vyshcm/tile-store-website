const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const sourceMap = {
  'kitchen-tiles': ['kitchen-tiles'],
  'kitchen-floor-tiles': ['kitchen-floor-tiles'],
  'counter-topsslabs': ['counter-topsslabs'],
  'bathroom-tiles': ['bathroom-tiles'],
  'bathroom-wall-tiles': ['bathroom-wall-tiles'],
  'bathroom-floor-tiles': ['bathroom-floor-tiles'],
  'floor-tiles': ['floor-tiles'],
  'wall-tiles': ['wall-tiles'],
  outdoor: ['outdoor-tiles'],
  bathrooms: ['bathrooms'],
  'doors-glass': ['doors-glass'],
  'shower-doors': ['shower-doors'],
  'wet-room-panels': ['wet-room-panels'],
  furniture: ['furniture'],
  'vanity-units': ['vanity-units'],
  cabinets: ['cabinets'],
  taps: ['taps'],
  toilets: ['toilets'],
  shower: ['shower'],
  mirrors: ['mirrors'],
  baths: ['baths'],
  heating: ['heating'],
  'wood-flooring': ['laminates', 'herringbone', 'luxury-vinyl-flooring'],
  laminates: ['laminates'],
  'water-resistant': ['water-resistant'],
  'non-water-resistant': ['non-water-resistant'],
  'wood-flooring-accessories': ['wood-flooring-accessories'],
  herringbone: ['herringbone'],
  'luxury-vinyl-flooring': ['luxury-vinyl-flooring'],
  sale: ['sale']
};

function decode(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&ndash;/g, '-')
    .replace(/&mdash;/g, '-');
}

async function get(url) {
  const response = await fetch(url, {
    headers: { 'user-agent': 'Mozilla/5.0 TILE STORE catalogue verification' }
  });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response;
}

function parseProducts(html, source) {
  const products = [];
  const pattern = /<img[^>]+alt="Image of ([^"]+)"[^>]+data-src="([^"]+)"[\s\S]*?<a class="d-block" aria-label="([^"]+)" href="([^"]+)"/g;
  let match;
  while ((match = pattern.exec(html))) {
    products.push({
      name: decode(match[3].trim()),
      imageUrl: decode(match[2]),
      tilexUrl: `https://www.tilex.ie${match[4]}`,
      collection: source
    });
  }
  return products;
}

async function scrapeSource(source) {
  const products = [];
  for (let page = 1; page <= 30; page += 1) {
    const url = `https://www.tilex.ie/categories/${source}${page > 1 ? `?page=${page}` : ''}`;
    const html = await (await get(url)).text();
    const pageProducts = parseProducts(html, source);
    if (!pageProducts.length) break;
    const previousCount = products.length;
    for (const product of pageProducts) {
      if (!products.some(item => item.tilexUrl === product.tilexUrl)) products.push(product);
    }
    if (products.length === previousCount || !html.includes(`?page=${page + 1}`)) break;
  }
  return products;
}

function hash(bytes) {
  return crypto.createHash('sha256').update(bytes).digest('hex');
}

async function inBatches(items, size, callback) {
  for (let index = 0; index < items.length; index += size) {
    await Promise.all(items.slice(index, index + size).map(callback));
  }
}

async function main() {
  const window = {};
  vm.runInNewContext(
    fs.readFileSync(path.join(root, 'assets', 'js', 'catalogue.js'), 'utf8'),
    { window }
  );
  const localCatalogue = window.tilexCatalogue;
  let errors = 0;

  for (const [slug, sources] of Object.entries(sourceMap)) {
    const liveProducts = [];
    for (const source of sources) {
      for (const product of await scrapeSource(source)) {
        if (!liveProducts.some(item => item.tilexUrl === product.tilexUrl)) liveProducts.push(product);
      }
    }

    const localProducts = localCatalogue[slug].products;
    if (liveProducts.length !== localProducts.length) {
      console.error(`${slug}: count mismatch, live ${liveProducts.length}, local ${localProducts.length}`);
      errors += 1;
      continue;
    }

    for (let index = 0; index < liveProducts.length; index += 1) {
      const live = liveProducts[index];
      const local = localProducts[index];
      if (live.name !== local.name) {
        console.error(`${slug} item ${index + 1}: title mismatch`);
        errors += 1;
      }
    }

    await inBatches(liveProducts.map((live, index) => ({ live, local: localProducts[index] })), 8, async ({ live, local }) => {
      const localBytes = fs.readFileSync(path.join(root, local.image));
      const remoteBytes = Buffer.from(await (await get(live.imageUrl)).arrayBuffer());
      if (hash(localBytes) !== hash(remoteBytes)) {
        console.error(`${slug}: image mismatch for ${live.name}`);
        errors += 1;
      }
    });

    console.log(`PASS ${slug}: ${liveProducts.length} titles, links and images match Tilex.ie`);
  }

  if (errors) throw new Error(`${errors} catalogue verification error(s)`);
  console.log('PASS all Tilex.ie catalogue checks');
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
