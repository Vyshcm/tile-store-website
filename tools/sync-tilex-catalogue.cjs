const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const outputRoot = path.join(root, 'assets', 'images', 'products');
const cataloguePath = path.join(root, 'assets', 'js', 'catalogue.js');

const categories = {
  'kitchen-tiles': {
    name: 'Kitchen Tiles',
    sources: ['kitchen-tiles']
  },
  'kitchen-floor-tiles': {
    name: 'Kitchen Floor Tiles',
    sources: ['kitchen-floor-tiles']
  },
  'counter-topsslabs': {
    name: 'Counter Tops/Slabs',
    sources: ['counter-topsslabs']
  },
  'bathroom-tiles': {
    name: 'Bathroom Tiles',
    sources: ['bathroom-tiles']
  },
  'bathroom-wall-tiles': {
    name: 'Bathroom Wall Tiles',
    sources: ['bathroom-wall-tiles']
  },
  'bathroom-floor-tiles': {
    name: 'Bathroom Floor Tiles',
    sources: ['bathroom-floor-tiles']
  },
  'floor-tiles': {
    name: 'Floor Tiles',
    sources: ['floor-tiles']
  },
  'wall-tiles': {
    name: 'Wall Tiles',
    sources: ['wall-tiles']
  },
  outdoor: {
    name: 'Outdoor',
    sources: ['outdoor-tiles']
  },
  bathrooms: {
    name: 'Bathrooms',
    sources: ['bathrooms']
  },
  'doors-glass': {
    name: 'Doors & Glass',
    sources: ['doors-glass']
  },
  'shower-doors': {
    name: 'Shower Doors',
    sources: ['shower-doors']
  },
  'wet-room-panels': {
    name: 'Wet Room Panels',
    sources: ['wet-room-panels']
  },
  furniture: {
    name: 'Furniture',
    sources: ['furniture']
  },
  'vanity-units': {
    name: 'Vanity Units',
    sources: ['vanity-units']
  },
  cabinets: {
    name: 'Cabinets',
    sources: ['cabinets']
  },
  taps: {
    name: 'Taps',
    sources: ['taps']
  },
  toilets: {
    name: 'Toilets',
    sources: ['toilets']
  },
  shower: {
    name: 'Shower',
    sources: ['shower']
  },
  mirrors: {
    name: 'Mirrors',
    sources: ['mirrors']
  },
  baths: {
    name: 'Baths',
    sources: ['baths']
  },
  heating: {
    name: 'Heating',
    sources: ['heating']
  },
  'wood-flooring': {
    name: 'Wood Flooring',
    sources: ['laminates', 'herringbone', 'luxury-vinyl-flooring']
  },
  laminates: {
    name: 'Laminates',
    sources: ['laminates']
  },
  'water-resistant': {
    name: 'Water Resistant',
    sources: ['water-resistant']
  },
  'non-water-resistant': {
    name: 'Non-Water Resistant',
    sources: ['non-water-resistant']
  },
  'wood-flooring-accessories': {
    name: 'Wood Flooring Accessories',
    sources: ['wood-flooring-accessories']
  },
  herringbone: {
    name: 'Herringbone',
    sources: ['herringbone']
  },
  'luxury-vinyl-flooring': {
    name: 'Luxury Vinyl Flooring',
    sources: ['luxury-vinyl-flooring']
  },
  sale: {
    name: 'Sale',
    sources: ['sale']
  }
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

function safeName(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 90);
}

async function get(url) {
  const response = await fetch(url, {
    headers: { 'user-agent': 'Mozilla/5.0 TILE STORE catalogue sync' }
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

function parseBanner(html, categoryName) {
  const bannerPattern = new RegExp(
    `<img[^>]+alt="${categoryName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]+data-src="([^"]+)"`,
    'i'
  );
  return html.match(bannerPattern)?.[1] || null;
}

async function scrapeSource(source, categoryName) {
  const products = [];
  let bannerUrl = null;
  for (let page = 1; page <= 30; page += 1) {
    const url = `https://www.tilex.ie/categories/${source}${page > 1 ? `?page=${page}` : ''}`;
    const html = await (await get(url)).text();
    if (!bannerUrl) bannerUrl = parseBanner(html, categoryName);
    const pageProducts = parseProducts(html, source);
    if (!pageProducts.length) break;
    const previousCount = products.length;
    for (const product of pageProducts) {
      if (!products.some(item => item.tilexUrl === product.tilexUrl)) products.push(product);
    }
    console.log(`${source} page ${page}: ${pageProducts.length} products`);
    if (products.length === previousCount || !html.includes(`?page=${page + 1}`)) break;
  }
  return { products, bannerUrl };
}

async function download(url, destination) {
  const response = await get(url);
  const bytes = Buffer.from(await response.arrayBuffer());
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, bytes);
}

async function main() {
  fs.mkdirSync(outputRoot, { recursive: true });
  const result = {};

  for (const [slug, category] of Object.entries(categories)) {
    const combined = [];
    let bannerUrl = null;
    for (const source of category.sources) {
      const scraped = await scrapeSource(source, category.name);
      if (!bannerUrl && scraped.bannerUrl) bannerUrl = scraped.bannerUrl;
      for (const product of scraped.products) {
        if (!combined.some(item => item.tilexUrl === product.tilexUrl)) combined.push(product);
      }
    }

    const categoryDir = path.join(outputRoot, slug);
    fs.mkdirSync(categoryDir, { recursive: true });
    for (let index = 0; index < combined.length; index += 1) {
      const product = combined[index];
      const sourcePath = new URL(product.imageUrl).pathname;
      const extension = path.extname(sourcePath) || '.jpg';
      const filename = `${String(index + 1).padStart(3, '0')}-${safeName(product.name)}${extension}`;
      await download(product.imageUrl, path.join(categoryDir, filename));
      product.image = `assets/images/products/${slug}/${filename}`;
      delete product.imageUrl;
      delete product.tilexUrl;
    }

    let hero = combined[0]?.image || '';
    if (bannerUrl) {
      const extension = path.extname(new URL(bannerUrl).pathname) || '.jpg';
      const bannerFilename = `category-banner${extension}`;
      await download(bannerUrl, path.join(categoryDir, bannerFilename));
      hero = `assets/images/products/${slug}/${bannerFilename}`;
    }

    result[slug] = {
      name: category.name,
      hero,
      sourceCategories: category.sources,
      products: combined
    };
    console.log(`${category.name}: ${combined.length} exact products downloaded`);
  }

  const output = `// Generated from Tilex.ie category pages. Do not hand-edit.\nwindow.tilexCatalogue = ${JSON.stringify(result, null, 2)};\n`;
  fs.writeFileSync(cataloguePath, output);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
