const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pages = {
  'kitchen-floor-tiles': 'Kitchen Floor Tiles',
  'counter-topsslabs': 'Counter Tops/Slabs',
  'bathroom-wall-tiles': 'Bathroom Wall Tiles',
  'bathroom-floor-tiles': 'Bathroom Floor Tiles',
  'doors-glass': 'Doors & Glass',
  'shower-doors': 'Shower Doors',
  'wet-room-panels': 'Wet Room Panels',
  furniture: 'Furniture',
  'vanity-units': 'Vanity Units',
  cabinets: 'Cabinets',
  taps: 'Taps',
  toilets: 'Toilets',
  shower: 'Shower',
  mirrors: 'Mirrors',
  baths: 'Baths',
  heating: 'Heating',
  laminates: 'Laminates',
  'water-resistant': 'Water Resistant',
  'non-water-resistant': 'Non-Water Resistant',
  'wood-flooring-accessories': 'Wood Flooring Accessories',
  herringbone: 'Herringbone',
  'luxury-vinyl-flooring': 'Luxury Vinyl Flooring',
  sale: 'Sale'
};

for (const [slug, name] of Object.entries(pages)) {
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="${name} at TILE STORE Dublin.">
  <title>${name} | TILE STORE</title>
  <link rel="icon" href="assets/icons/favicon.png">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <main data-category="${slug}"></main>
  <script src="assets/js/catalogue.js"></script>
  <script src="assets/js/site.js"></script>
</body>
</html>
`;
  fs.writeFileSync(path.join(root, `${slug}.html`), html);
}

console.log(`Generated ${Object.keys(pages).length} internal category pages.`);
