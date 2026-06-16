const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const cataloguePath = path.join(root, 'assets', 'js', 'catalogue.js');

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

function decode(value = '') {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&#39;/g, "'")
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&ndash;/g, '-')
    .replace(/&mdash;/g, '-')
    .replace(/&euro;/g, 'EUR');
}

function cleanText(value = '') {
  return decode(value)
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/p>\s*<p[^>]*>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function productSlug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

async function get(url) {
  const response = await fetch(url, {
    headers: { 'user-agent': 'Mozilla/5.0 TILE STORE product detail sync' }
  });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.text();
}

function parseProducts(html, source) {
  const products = [];
  const pattern = /<img[^>]+alt="Image of ([^"]+)"[^>]+data-src="([^"]+)"[\s\S]*?<a class="d-block" aria-label="([^"]+)" href="([^"]+)"/g;
  let match;
  while ((match = pattern.exec(html))) {
    products.push({
      name: cleanText(match[3]),
      tilexUrl: `https://www.tilex.ie${decode(match[4])}`,
      collection: source
    });
  }
  return products;
}

async function scrapeSource(source) {
  const products = [];
  for (let page = 1; page <= 30; page += 1) {
    const url = `https://www.tilex.ie/categories/${source}${page > 1 ? `?page=${page}` : ''}`;
    const html = await get(url);
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

function parseDescription(html) {
  const section = html.match(/<div class="accordion-item tab-details-desc">([\s\S]*?)(?=<div class="accordion-item|<\/div>\s*<div class="tab-pane|$)/i)?.[1] || '';
  const readmore = section.match(/<div class="readmore">([\s\S]*?)<\/div>/i)?.[1] || '';
  return cleanText(readmore) || 'Description pending';
}

function parseKeyFeatures(html) {
  const section = html.match(/<div class="accordion-item tab-keyfeatured-details">([\s\S]*?)(?=<div class="accordion-item|$)/i)?.[1] || '';
  const features = [];
  const pattern = /<label[^>]*class="fw-bold"[^>]*>([\s\S]*?)<\/label>[\s\S]*?<div class="text-bottom-table">\s*([\s\S]*?)\s*<\/div>/gi;
  let match;
  while ((match = pattern.exec(section))) {
    const label = cleanText(match[1]);
    const value = cleanText(match[2]);
    if (label && value) features.push({ label, value });
  }
  return features;
}

async function detailFor(url) {
  const html = await get(url);
  const keyFeatures = parseKeyFeatures(html);
  const findFeature = label => keyFeatures.find(item => item.label.toLowerCase() === label)?.value || '';
  return {
    description: parseDescription(html),
    keyFeatures: keyFeatures.length ? keyFeatures : [{ label: 'Features', value: 'Features pending' }],
    size: findFeature('size') || 'Features pending',
    finish: findFeature('finish') || 'Features pending'
  };
}

async function inBatches(items, size, callback) {
  for (let index = 0; index < items.length; index += size) {
    await Promise.all(items.slice(index, index + size).map(callback));
  }
}

async function main() {
  const window = {};
  vm.runInNewContext(fs.readFileSync(cataloguePath, 'utf8'), { window });
  const catalogue = window.tilexCatalogue;
  const detailCache = new Map();
  let matched = 0;
  let pending = 0;

  for (const [slug, category] of Object.entries(catalogue)) {
    const liveProducts = [];
    for (const source of sourceMap[slug] || category.sourceCategories || [slug]) {
      for (const product of await scrapeSource(source)) {
        if (!liveProducts.some(item => item.tilexUrl === product.tilexUrl)) liveProducts.push(product);
      }
    }

    await inBatches(category.products || [], 5, async (product, index) => {
      const live = liveProducts[index] && productSlug(liveProducts[index].name) === productSlug(product.name)
        ? liveProducts[index]
        : liveProducts.find(item => productSlug(item.name) === productSlug(product.name));

      if (!live) {
        product.description = 'Description pending';
        product.keyFeatures = [{ label: 'Features', value: 'Features pending' }];
        product.size = 'Features pending';
        product.finish = 'Features pending';
        pending += 1;
        return;
      }

      if (!detailCache.has(live.tilexUrl)) detailCache.set(live.tilexUrl, detailFor(live.tilexUrl));
      Object.assign(product, await detailCache.get(live.tilexUrl));
      matched += 1;
    });

    console.log(`${slug}: ${category.products?.length || 0} products enriched`);
  }

  const output = `// Generated from Tilex.ie category pages. Do not hand-edit.\nwindow.tilexCatalogue = ${JSON.stringify(catalogue, null, 2)};\n`;
  fs.writeFileSync(cataloguePath, output);
  console.log(`Done. Matched ${matched}; pending ${pending}.`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
