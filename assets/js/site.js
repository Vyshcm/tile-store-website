const A = 'assets/';

const categories = [
  { name: 'Kitchen Tiles', slug: 'kitchen-tiles', image: 'assets/images/products/kitchen-tiles/category-banner.jpg' },
  { name: 'Bathroom Tiles', slug: 'bathroom-tiles', image: 'assets/images/products/bathroom-tiles/001-venus-bianco.jpg' },
  { name: 'Floor Tiles', slug: 'floor-tiles', image: 'assets/images/products/floor-tiles/001-venus-bianco.jpg' },
  { name: 'Wall Tiles', slug: 'wall-tiles', image: 'assets/images/products/wall-tiles/001-venus-bianco.jpg' },
  { name: 'Outdoor', slug: 'outdoor', image: 'assets/images/products/outdoor/001-sandy-bay.jpg' },
  { name: 'Bathrooms', slug: 'bathrooms', image: 'assets/images/products/bathrooms/001-brant-wall-hung-toilet-pan.jpg' },
  { name: 'Wood Flooring', slug: 'wood-flooring', image: 'assets/images/products/wood-flooring/003-marino-oak-8-0-standard-plank.jpg' },
  { name: 'Sale', slug: 'sale', image: 'assets/images/products/sale/001-sigma-statuario.jpg' }
];

const subcategories = [
  { name: 'Kitchen Floor Tiles', slug: 'kitchen-floor-tiles', image: 'assets/images/products/kitchen-floor-tiles/001-venus-bianco.jpg' },
  { name: 'Counter Tops/Slabs', slug: 'counter-topsslabs', image: 'assets/images/products/kitchen-tiles/category-banner.jpg' },
  { name: 'Bathroom Wall Tiles', slug: 'bathroom-wall-tiles', image: 'assets/images/products/bathroom-wall-tiles/001-venus-bianco.jpg' },
  { name: 'Bathroom Floor Tiles', slug: 'bathroom-floor-tiles', image: 'assets/images/products/bathroom-floor-tiles/001-venus-bianco.jpg' },
  { name: 'Doors & Glass', slug: 'doors-glass', image: 'assets/images/products/doors-glass/001-mina-6mm-bi-fold-door-side-panel.jpg' },
  { name: 'Shower Doors', slug: 'shower-doors', image: 'assets/images/products/shower-doors/001-mina-6mm-bi-fold-door-side-panel.jpg' },
  { name: 'Wet Room Panels', slug: 'wet-room-panels', image: 'assets/images/products/wet-room-panels/001-emmi-curved-wetroom-gun-metal.jpg' },
  { name: 'Furniture', slug: 'furniture', image: 'assets/images/products/furniture/001-sofia-floor-units-multiple-sizes-and-colours-availble.jpg' },
  { name: 'Vanity Units', slug: 'vanity-units', image: 'assets/images/products/vanity-units/001-sofia-floor-units-multiple-sizes-and-colours-availble.jpg' },
  { name: 'Cabinets', slug: 'cabinets', image: 'assets/images/products/cabinets/001-serra-tall-boy-wall-units-multiple-sizes-and-colours-availble.jpg' },
  { name: 'Taps', slug: 'taps', image: 'assets/images/products/taps/001-dayla-brushed-brass-tall.jpg' },
  { name: 'Toilets', slug: 'toilets', image: 'assets/images/products/toilets/001-brant-wall-hung-toilet-pan.jpg' },
  { name: 'Shower', slug: 'shower', image: 'assets/images/products/shower/001-ibiza-slate-shower-trays-black-multiple-sizes-shapes.jpg' },
  { name: 'Mirrors', slug: 'mirrors', image: 'assets/images/products/mirrors/001-otis.jpg' },
  { name: 'Baths', slug: 'baths', image: 'assets/images/products/baths/001-temple-shower-bath.jpg' },
  { name: 'Heating', slug: 'heating', image: 'assets/images/products/heating/001-trix-1800-white-anthracite.jpg' },
  { name: 'Laminates', slug: 'laminates', image: 'assets/images/products/laminates/003-marino-oak-8-0-standard-plank.jpg' },
  { name: 'Water Resistant', slug: 'water-resistant', image: 'assets/images/products/water-resistant/001-story-alpine-oak.jpg' },
  { name: 'Non-Water Resistant', slug: 'non-water-resistant', image: 'assets/images/products/non-water-resistant/001-marino-oak-8-0-standard-plank.jpg' },
  { name: 'Wood Flooring Accessories', slug: 'wood-flooring-accessories', image: 'assets/images/products/wood-flooring-accessories/001-gold-accoustic-underlay.jpg' },
  { name: 'Herringbone', slug: 'herringbone', image: 'assets/images/products/herringbone/001-edinburgh-oak-8-0-herringbone.jpg' },
  { name: 'Luxury Vinyl Flooring', slug: 'luxury-vinyl-flooring', image: 'assets/images/products/wood-flooring/003-marino-oak-8-0-standard-plank.jpg' }
];

const allCategories = [...categories, ...subcategories];

const navTree = [
  { name: 'Kitchen Tiles', slug: 'kitchen-tiles', children: [
    { name: 'Kitchen Floor Tiles', slug: 'kitchen-floor-tiles', image: 'assets/images/products/kitchen-floor-tiles/001-venus-bianco.jpg' },
    { name: 'Counter Tops/Slabs', slug: 'counter-topsslabs', image: 'assets/images/products/kitchen-tiles/category-banner.jpg' }
  ]},
  { name: 'Bathroom Tiles', slug: 'bathroom-tiles', children: [
    { name: 'Bathroom Wall Tiles', slug: 'bathroom-wall-tiles' },
    { name: 'Bathroom Floor Tiles', slug: 'bathroom-floor-tiles' }
  ]},
  { name: 'Floor Tiles', slug: 'floor-tiles' },
  { name: 'Wall Tiles', slug: 'wall-tiles' },
  { name: 'Outdoor', slug: 'outdoor' },
  { name: 'Bathrooms', slug: 'bathrooms', wide: true, children: [
    { name: 'Doors & Glass', slug: 'doors-glass', children: [
      { name: 'Shower Doors', slug: 'shower-doors' },
      { name: 'Wet Room Panels', slug: 'wet-room-panels' }
    ]},
    { name: 'Furniture', slug: 'furniture', children: [
      { name: 'Vanity Units', slug: 'vanity-units' },
      { name: 'Cabinets', slug: 'cabinets' }
    ]},
    { name: 'Taps', slug: 'taps' },
    { name: 'Toilets', slug: 'toilets' },
    { name: 'Shower', slug: 'shower' },
    { name: 'Mirrors', slug: 'mirrors' },
    { name: 'Baths', slug: 'baths' },
    { name: 'Heating', slug: 'heating' }
  ]},
  { name: 'Wood Flooring', slug: 'wood-flooring', children: [
    { name: 'Laminates', slug: 'laminates', children: [
      { name: 'Water Resistant', slug: 'water-resistant' },
      { name: 'Non-Water Resistant', slug: 'non-water-resistant' },
      { name: 'Wood Flooring Accessories', slug: 'wood-flooring-accessories' }
    ]},
    { name: 'Herringbone', slug: 'herringbone' },
    { name: 'Luxury Vinyl Flooring', slug: 'luxury-vinyl-flooring' }
  ]},
  { name: 'Sale', slug: 'sale' }
];

const catalogue = window.tilexCatalogue || {};

function productSlug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function desktopNavItem(item, current) {
  const active = current === `${item.slug}.html`;
  const children = item.children || [];
  const childMarkup = children.map(child => `
    <div class="dropdown-entry ${child.children ? 'has-submenu' : ''}">
      <a href="${child.slug}.html">
        ${child.image ? `<img src="${child.image}" alt="">` : ''}
        <span>${child.name}</span>${child.children ? '<b>›</b>' : ''}
      </a>
      ${child.children ? `<div class="nav-submenu">${child.children.map(nested => `<a href="${nested.slug}.html">${nested.name}</a>`).join('')}</div>` : ''}
    </div>`).join('');
  return `<div class="nav-item ${children.length ? 'has-dropdown' : ''} ${item.wide ? 'wide-dropdown' : ''}">
    <a class="${active ? 'active' : ''}" href="${item.slug}.html">${item.name}</a>
    ${children.length ? `<div class="nav-dropdown">${childMarkup}</div>` : ''}
  </div>`;
}

function mobileNavItem(item) {
  const children = item.children || [];
  return `<div class="mobile-nav-item ${children.length ? 'has-children' : ''}">
    <div class="mobile-nav-row"><a href="${item.slug}.html">${item.name}</a>${children.length ? '<button type="button" aria-label="Toggle submenu">+</button>' : ''}</div>
    ${children.length ? `<div class="mobile-submenu">${children.map(child => `
      <div class="mobile-subgroup">
        <div class="mobile-nav-row"><a href="${child.slug}.html">${child.name}</a>${child.children ? '<button type="button" aria-label="Toggle submenu">+</button>' : ''}</div>
        ${child.children ? `<div class="mobile-submenu nested">${child.children.map(nested => `<a href="${nested.slug}.html">${nested.name}</a>`).join('')}</div>` : ''}
      </div>`).join('')}</div>` : ''}
  </div>`;
}

function shell() {
  const current = location.pathname.split('/').pop() || 'index.html';
  const navCats = navTree.map(item => desktopNavItem(item, current)).join('');
  const mobileNav = navTree.map(mobileNavItem).join('');
  let showLoader = false;
  try {
    showLoader = !sessionStorage.getItem('loaderShown');
  } catch {
    showLoader = true;
  }
  document.body.insertAdjacentHTML('afterbegin', `
    ${showLoader ? `<div class="loader"><div class="loader-inner"><img src="${A}images/tile-store-logo.png" alt="TILE STORE"><div class="loader-line"></div></div></div>` : ''}
    <header class="site-header ${current !== 'index.html' ? 'inner-header' : ''}">
      <div class="container nav">
        <a class="brand" href="index.html"><img src="${A}images/tile-store-logo.png" alt="TILE STORE"></a>
        <nav class="nav-links">${navCats}<a class="${current === 'about.html' ? 'active' : ''}" href="about.html">About Us</a><a class="${current === 'contact.html' ? 'active' : ''}" href="contact.html">Contact Us</a></nav>
        <div class="nav-actions">
          <a class="nav-contact" href="https://wa.me/353868132681" target="_blank" rel="noopener" aria-label="Contact TILE STORE on WhatsApp">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.4Zm-8.3 18.2c-1.7 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.4 4.7Zm5.4-7.3c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.7.1-.2 0-.4 0-.6L8.3 6.3c-.3-.7-.7-.6-1-.6h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2 2.2 1 3.1 1.1 4.2.9.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.4-.3-.7-.4Z"/></svg>
            <span>WhatsApp</span>
          </a>
          <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
        </div>
      </div>
    </header>
    <div class="mobile-menu">
      <img src="${A}images/tile-store-logo.png" alt="TILE STORE">
      <div class="mobile-nav">${mobileNav}<div class="mobile-nav-item"><div class="mobile-nav-row"><a href="about.html">About Us</a></div></div><div class="mobile-nav-item"><div class="mobile-nav-row"><a href="contact.html">Contact Us</a></div></div></div>
    </div>`);

  document.body.insertAdjacentHTML('beforeend', `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand"><img class="footer-logo" src="${A}images/tile-store-logo.png" alt="TILE STORE"><p>Curated surfaces, considered bathrooms and beautiful wood flooring for modern Irish interiors.</p></div>
          <div class="footer-col"><h4>Explore</h4><a href="index.html">Home</a><a href="about.html">About Us</a><a href="contact.html">Contact Us</a><a href="blog.html">Journal</a></div>
          <div class="footer-col categories"><h4>Collections</h4>${categories.map(c => `<a href="${c.slug}.html">${c.name}</a>`).join('')}</div>
          <div class="footer-col"><h4>Visit Us</h4><a href="tel:+353868132681">086 813 2681</a><a href="mailto:info@tilestore.ie">info@tilestore.ie</a><address>Unit 12C, Robinhood Industrial Estate<br>Robinhood Road, Dublin 22<br>D22 KXY5</address><p>Mon - Sat / 9am - 5pm</p></div>
        </div>
        <div class="footer-bottom"><span>© ${new Date().getFullYear()} TILE STORE. All rights reserved.</span><span>Tiles · Laminates · Bathwares</span></div>
      </div>
    </footer>
    <a class="social-float instagram" href="https://www.instagram.com/tilestore.ie/" target="_blank" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg></a>
    <a class="social-float whatsapp" href="https://wa.me/353868132681" target="_blank" aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.4Zm-8.3 18.2c-1.7 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.4 4.7Zm5.4-7.3c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.7.1-.2 0-.4 0-.6L8.3 6.3c-.3-.7-.7-.6-1-.6h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2 2.2 1 3.1 1.1 4.2.9.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.4-.3-.7-.4Z"/></svg></a>`);
}

function productCard(product, category, categorySlug) {
  const detailUrl = `product-detail.html?category=${encodeURIComponent(categorySlug)}&id=${encodeURIComponent(productSlug(product.name))}`;
  return `<article class="product-card reveal"><div class="product-image"><img src="${product.image}" alt="${product.name}" loading="lazy"></div><div class="product-meta"><small>${category}</small><h3>${product.name}</h3><a class="text-link" href="${detailUrl}">View details</a></div></article>`;
}

function renderCategoryPage() {
  const root = document.querySelector('[data-category]');
  if (!root) return;
  const slug = root.dataset.category;
  const category = allCategories.find(c => c.slug === slug);
  const source = catalogue[slug];
  const items = source?.products || [];
  const hero = source?.hero || category.image;
  root.innerHTML = `
    <section class="page-hero"><img src="${hero}" alt="${category.name}"><div class="container page-hero-content"><div class="breadcrumbs">Home / Collections / ${category.name}</div><h1>${category.name}</h1><p>Explore our current ${category.name} collection, selected for beautiful, enduring interior spaces.</p></div></section>
    <section class="section"><div class="container"><div class="filter-bar"><span>Showing ${items.length} products</span><select aria-label="Sort products"><option>Featured order</option><option>Name A - Z</option></select></div>${items.length ? `<div class="products-grid">${items.map(product => productCard(product, category.name, slug)).join('')}</div>` : `<div class="empty-collection reveal"><div class="eyebrow">Collection update</div><h2>New designs are being prepared.</h2><p>Contact our showroom for current availability and tailored recommendations in ${category.name}.</p><a class="btn" href="contact.html">Contact TILE STORE</a></div>`}</div></section>
    ${ctaBlock(hero)}`;
}

function renderProductDetail() {
  const root = document.querySelector('[data-product-detail]');
  if (!root) return;
  const params = new URLSearchParams(location.search);
  const categorySlug = params.get('category') || '';
  const id = params.get('id') || '';
  const source = catalogue[categorySlug];
  const product = source?.products.find(item => productSlug(item.name) === id);
  const category = allCategories.find(item => item.slug === categorySlug);

  if (!product || !category) {
    root.innerHTML = `<section class="product-detail-page"><div class="container product-not-found"><div class="eyebrow" style="justify-content:center">TILE STORE collection</div><h1>Product not found</h1><p>The product may have moved or the link is incomplete.</p><a class="btn" href="index.html">Explore Collections</a></div></section>`;
    document.title = 'Product Not Found | TILE STORE';
    return;
  }

  const categoryUrl = `${category.slug}.html`;
  const whatsappText = encodeURIComponent(`Hello TILE STORE, I would like to enquire about ${product.name} from the ${category.name} collection.`);
  const productIndex = source.products.indexOf(product);
  const profile = productProfile(product, category, productIndex);
  const related = [1, 2, 3]
    .map(offset => source.products[(productIndex + offset) % source.products.length])
    .filter((item, relatedIndex, items) => item && item !== product && items.indexOf(item) === relatedIndex);
  document.title = `${product.name} | TILE STORE`;
  root.innerHTML = `
    <section class="product-detail-page">
      <div class="container product-detail-grid">
        <div class="product-detail-image reveal"><img src="${product.image}" alt="${product.name}"></div>
        <div class="product-detail-copy reveal">
          <div class="breadcrumbs" style="color:var(--muted)">Home / ${category.name} / ${product.name}</div>
          <div class="eyebrow">${category.name}</div>
          <h1>${product.name}</h1>
          <p>${profile.description}</p>
          <p>${profile.guidance}</p>
          <div class="product-specs">
            <div class="product-spec"><small>Key features</small><ul class="product-features">${profile.features.map(feature => `<li>${feature}</li>`).join('')}</ul></div>
            <div class="product-spec"><small>Suitable areas</small><strong>${profile.areas}</strong></div>
            <div class="product-spec"><small>Design style</small><strong>${profile.style}</strong></div>
            <div class="product-spec"><small>Maintenance</small><strong>${profile.maintenance}</strong></div>
          </div>
          <div class="product-detail-actions">
            <a class="btn" href="https://wa.me/353868132681?text=${whatsappText}" target="_blank" rel="noopener">WhatsApp Enquiry</a>
            <a class="btn btn-secondary" href="${categoryUrl}">Back to Category</a>
          </div>
        </div>
      </div>
    </section>
    ${related.length ? `<section class="related-products"><div class="container"><div class="section-heading reveal"><div class="eyebrow">Continue exploring</div><h2>Related ${category.name}</h2></div><div class="related-products-grid">${related.map(item => `<a class="related-product reveal" href="product-detail.html?category=${encodeURIComponent(category.slug)}&id=${encodeURIComponent(productSlug(item.name))}"><img src="${item.image}" alt="${item.name}"><div><small>${category.name}</small><h3>${item.name}</h3><span class="text-link">View details</span></div></a>`).join('')}</div></div></section>` : ''}`;
}

function productProfile(product, category, index) {
  const name = product.name;
  const slug = category.slug;
  const isWood = /wood|laminate|herringbone|flooring|resistant|accessories/.test(slug);
  const isBathroomProduct = /bathrooms|doors|glass|furniture|vanity|cabinet|taps|toilets|shower|mirrors|baths|heating/.test(slug);
  const isOutdoor = slug === 'outdoor';
  const isSurface = /tiles|floor-tiles|wall-tiles|counter/.test(slug);
  const moods = ['quietly architectural', 'warm and tactile', 'clean-lined and contemporary', 'richly expressive'];
  const mood = moods[index % moods.length];

  if (isWood) {
    return {
      description: `${name} brings a ${mood} character to the ${category.name} collection. Its natural-looking grain and balanced tone are designed to give living spaces visual warmth without overwhelming the wider interior scheme.`,
      guidance: `Use ${name} to create continuity through open-plan rooms or to bring a softer material contrast beside stone and tile. Our team can advise on colour coordination, installation pattern and suitable underlay.`,
      features: ['Natural timber character', 'Comfortable visual warmth', 'Works with modern neutral palettes'],
      areas: 'Living rooms, bedrooms, hallways and selected open-plan spaces',
      style: index % 2 ? 'Contemporary natural' : 'Modern European',
      maintenance: 'Regular dry cleaning with a suitable wood-floor care routine'
    };
  }
  if (isBathroomProduct) {
    return {
      description: `${name} is a ${mood} addition to our ${category.name} edit, chosen to bring practical performance and a resolved designer finish to the bathroom.`,
      guidance: `Pair ${name} with complementary tiles, brassware and furniture tones for a cohesive scheme. Contact our showroom for dimensions, finish availability and installation considerations.`,
      features: ['Considered contemporary detailing', 'Selected for everyday bathroom use', 'Coordinates with wider TILE STORE collections'],
      areas: 'Bathrooms, en suites, cloakrooms and residential wellness spaces',
      style: index % 2 ? 'Refined contemporary' : 'Minimal luxury',
      maintenance: 'Use non-abrasive bathroom cleaners and wipe finishes regularly'
    };
  }
  if (isOutdoor) {
    return {
      description: `${name} introduces a ${mood} surface language to outdoor living. The design is selected to extend the architectural palette beyond the home and create a more seamless connection between inside and out.`,
      guidance: `Consider ${name} for terraces, patios and garden rooms where tone and texture need to sit comfortably with the building exterior. Ask our team about installation and outdoor suitability.`,
      features: ['Architectural stone character', 'Designed for cohesive outdoor schemes', 'Pairs naturally with planting and timber'],
      areas: 'Patios, terraces, garden rooms and outdoor entertaining areas',
      style: 'Contemporary outdoor',
      maintenance: 'Sweep regularly and clean with products suitable for exterior surfaces'
    };
  }
  if (isSurface) {
    return {
      description: `${name} is a ${mood} design from our ${category.name} collection. Its pattern, tone and surface character have been selected to give interiors depth while remaining easy to coordinate with cabinetry, paint and natural materials.`,
      guidance: `Use ${name} as a calm foundation or a confident focal surface depending on scale and placement. Visit the showroom to compare the finish in person and discuss layout, grout tone and quantities.`,
      features: ['Premium visual finish', 'Versatile colour coordination', 'Suitable for considered modern schemes'],
      areas: slug.includes('wall') ? 'Bathrooms, kitchens and feature walls' : 'Kitchens, bathrooms, halls and living areas',
      style: index % 3 === 0 ? 'Marble-inspired luxury' : index % 3 === 1 ? 'Modern architectural' : 'Soft contemporary',
      maintenance: 'Clean with a pH-neutral surface cleaner and avoid abrasive products'
    };
  }
  return {
    description: `${name} is a distinctive design within our ${category.name} collection, selected for its balanced proportions, premium finish and ability to support a coherent interior scheme.`,
    guidance: `Contact the TILE STORE team for current availability, technical guidance and help coordinating ${name} with the other materials in your project.`,
    features: ['Premium selected finish', 'Contemporary design language', 'Showroom guidance available'],
    areas: 'Contemporary residential interiors',
    style: 'Modern luxury',
    maintenance: 'Follow the recommended care guidance for the selected finish'
  };
}

function ctaBlock(image) {
  return `<section class="cta"><img src="${image}" alt="TILE STORE collection"><div class="cta-inner reveal"><div class="eyebrow" style="justify-content:center">Visit our Dublin showroom</div><h2>Transform Your Space With TILE STORE</h2><a class="btn btn-outline" href="contact.html">Contact Us</a></div></section>`;
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function loadStyle(href) {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded) resolve();
      else existing.addEventListener('load', resolve, { once: true });
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    script.addEventListener('load', () => { script.dataset.loaded = 'true'; resolve(); }, { once: true });
    script.addEventListener('error', reject, { once: true });
    document.head.appendChild(script);
  });
}

async function loadMotionLibraries() {
  if (reducedMotion.matches) return false;
  loadStyle('https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css');
  try {
    await Promise.all([
      loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js'),
      loadScript('https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js')
    ]);
    await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js');
    return Boolean(window.gsap && window.ScrollTrigger);
  } catch {
    return false;
  }
}

function prepareMotionElements() {
  splitMotionText();

  document.querySelectorAll('.category-card, .product-card, .feature-card, .value-card, .gallery-item, .blog-card, .showcase-panel, .inspiration-card, .editorial-card')
    .forEach((element, index) => {
      element.dataset.motionIndex = String(index);
    });

  document.querySelectorAll('.contact-row, .counter, .filter-bar')
    .forEach((element, index) => {
      element.dataset.aos = 'fade-up';
      element.dataset.aosDuration = '750';
      element.dataset.aosDelay = String((index % 4) * 65);
      element.dataset.aosOnce = 'true';
    });

  document.querySelectorAll('.category-card, .product-image, .gallery-item, .about-visual, .blog-card, .page-hero, .showcase-panel, .inspiration-card, .editorial-card')
    .forEach(element => element.classList.add('image-reveal'));
  document.querySelectorAll('.hero-slide img, .page-hero > img, .cta > img')
    .forEach(element => element.classList.add('motion-depth'));
}

function splitMotionText() {
  const selectors = [
    '.hero h1',
    '.section-heading h2',
    '.inspiration-gallery-head h2',
    '.inspiration-heading h2',
    '.about-copy h2',
    '.testimonial blockquote',
    '.cta h2',
    '.page-hero h1'
  ];

  document.querySelectorAll(selectors.join(',')).forEach(element => {
    if (element.dataset.textSplit) return;
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(node => {
      const fragment = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach(part => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          fragment.appendChild(document.createTextNode(part));
          return;
        }
        const word = document.createElement('span');
        word.className = 'motion-word';
        const inner = document.createElement('span');
        inner.className = 'motion-word-inner';
        inner.textContent = part;
        word.appendChild(inner);
        fragment.appendChild(word);
      });
      node.replaceWith(fragment);
    });
    element.dataset.textSplit = 'true';
  });
}

function nativeMotionFallback() {
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const delay = Number(entry.target.dataset.motionIndex || 0) % 4 * 70;
    setTimeout(() => {
      entry.target.classList.add('visible');
      entry.target.classList.add('image-visible');
    }, delay);
    revealObserver.unobserve(entry.target);
  }), { threshold: .1, rootMargin: '0px 0px -5% 0px' });
  document.querySelectorAll('.reveal, .image-reveal').forEach(element => revealObserver.observe(element));
}

function runGsapMotion() {
  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add('gsap-active');

  const entrance = gsap.timeline({ delay: .25, defaults: { ease: 'power3.out' } });

  if (document.querySelector('.hero')) {
    entrance
      .fromTo(
        '.hero .eyebrow',
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: .65, clearProps: 'opacity,transform' },
        '-=.4'
      )
      .fromTo('.hero h1 .motion-word-inner',
        { yPercent: 115, rotate: 2 },
        { yPercent: 0, rotate: 0, duration: 1.05, stagger: .055, clearProps: 'transform' },
        '-=.35')
      .fromTo(
        '.hero-sub',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: .75, clearProps: 'opacity,transform' },
        '-=.62'
      )
      .fromTo(
        '.hero-buttons .btn',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, stagger: .12, duration: .65, clearProps: 'opacity,transform' },
        '-=.48'
      )
      .from('.hero-index, .scroll-cue', { opacity: 0, duration: .7 }, '-=.3');
  } else {
    entrance
      .from('.page-hero .breadcrumbs', { y: 18, opacity: 0, duration: .55 }, '-=.35')
      .fromTo('.page-hero h1 .motion-word-inner',
        { yPercent: 112 },
        { yPercent: 0, duration: .95, stagger: .045, clearProps: 'transform' },
        '-=.25')
      .from('.page-hero p', { y: 24, opacity: 0, duration: .7 }, '-=.5');
  }

  gsap.utils.toArray('.section-heading, .about-copy, .contact-details, .form-panel, .testimonial, .cta-inner, .inspiration-gallery-head, .inspiration-heading')
    .forEach(element => gsap.from(element, {
      scrollTrigger: { trigger: element, start: 'top 88%', once: true },
      y: 34, opacity: 0, duration: .85, ease: 'power3.out'
    }));

  gsap.utils.toArray('main h2[data-text-split], main blockquote[data-text-split]').forEach(heading => {
    gsap.fromTo(heading.querySelectorAll('.motion-word-inner'), { yPercent: 110 }, {
      yPercent: 0,
      duration: .9,
      stagger: .035,
      ease: 'power3.out',
      clearProps: 'transform',
      scrollTrigger: { trigger: heading, start: 'top 88%', once: true }
    });
  });

  const groups = ['.category-grid', '.product-scroller', '.feature-grid', '.values-grid', '.gallery-grid', '.blog-grid', '.luxury-showcase', '.inspiration-track', '.inspiration-masonry'];
  groups.forEach(selector => {
    const group = document.querySelector(selector);
    if (!group) return;
    const cards = group.querySelectorAll('.category-card, .product-card, .feature-card, .value-card, .gallery-item, .blog-card, .showcase-panel, .inspiration-card, .editorial-card');
    gsap.from(cards, {
      scrollTrigger: { trigger: group, start: 'top 86%', once: true },
      y: 58, opacity: 0, scale: .975, duration: .95, stagger: { each: .1, from: 'start' }, ease: 'power3.out',
      clearProps: 'opacity,transform'
    });
  });

  ScrollTrigger.batch('.products-grid .product-card', {
    start: 'top 90%',
    once: true,
    batchMax: 6,
    interval: .08,
    onEnter: batch => gsap.fromTo(batch,
      { y: 42, opacity: 0, scale: .985 },
      { y: 0, opacity: 1, scale: 1, duration: .8, stagger: .07, ease: 'power3.out', clearProps: 'opacity,transform' }
    )
  });

  ScrollTrigger.batch('.image-reveal', {
    start: 'top 91%',
    once: true,
    batchMax: 6,
    interval: .08,
    onEnter: batch => gsap.fromTo(batch,
      { clipPath: 'inset(0 0 100% 0)' },
      { clipPath: 'inset(0 0 0% 0)', duration: 1.05, stagger: .06, ease: 'power3.inOut', clearProps: 'clipPath' }
    )
  });

  gsap.utils.toArray('.motion-depth').forEach(image => {
    gsap.fromTo(image, { yPercent: -3 }, {
      yPercent: 5,
      ease: 'none',
      scrollTrigger: { trigger: image.parentElement, start: 'top bottom', end: 'bottom top', scrub: .7 }
    });
  });

  gsap.utils.toArray('.editorial-media').forEach((media, index) => {
    gsap.fromTo(media, { yPercent: -4 }, {
      yPercent: 4,
      ease: 'none',
      scrollTrigger: {
        trigger: media.closest('.editorial-card'),
        start: 'top bottom',
        end: 'bottom top',
        scrub: .8 + (index % 3) * .15
      }
    });
  });

  gsap.utils.toArray('.gallery-grid .gallery-item, .inspiration-track .inspiration-card').forEach((card, index) => {
    gsap.fromTo(card, { y: index % 2 ? 12 : -12 }, {
      y: index % 2 ? -12 : 12,
      ease: 'none',
      scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 1.1 }
    });
  });

  gsap.utils.toArray('.feature-number').forEach((number, index) => {
    gsap.from(number, {
      scrollTrigger: { trigger: number.closest('.feature-card'), start: 'top 88%', once: true },
      opacity: 0,
      x: -14,
      rotate: -8,
      duration: .65,
      delay: index % 3 * .08,
      ease: 'back.out(1.8)'
    });
  });

  gsap.from('.site-footer .footer-brand, .site-footer .footer-col, .site-footer .footer-bottom', {
    scrollTrigger: { trigger: '.site-footer', start: 'top 92%', once: true },
    y: 34, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out'
  });

  if (window.AOS) window.AOS.init({ once: true, duration: 850, easing: 'ease-out-cubic', offset: 45, disable: reducedMotion.matches });
}

async function interactions() {
  const loader = document.querySelector('.loader');
  const finishLoading = () => {
    loader?.classList.add('hide');
    document.body.classList.add('motion-ready');
    if (loader) {
      try {
        sessionStorage.setItem('loaderShown', 'true');
      } catch {
        // Storage can be unavailable in privacy-restricted contexts.
      }
      setTimeout(() => loader.remove(), reducedMotion.matches ? 0 : 900);
    }
  };
  if (loader) {
    window.addEventListener('load', () => setTimeout(finishLoading, reducedMotion.matches ? 0 : 500), { once: true });
    setTimeout(finishLoading, reducedMotion.matches ? 0 : 1800);
  } else {
    document.body.classList.add('motion-ready');
  }
  const header = document.querySelector('.site-header');
  const onScroll = () => header?.classList.toggle('scrolled', scrollY > 30);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  toggle?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    document.body.classList.toggle('menu-open', open);
    toggle.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  document.querySelectorAll('.mobile-nav-row button').forEach(button => {
    button.addEventListener('click', () => {
      const owner = button.closest('.mobile-nav-item, .mobile-subgroup');
      owner?.classList.toggle('open');
    });
  });
  prepareMotionElements();
  if (reducedMotion.matches) {
    document.querySelectorAll('.reveal, .image-reveal').forEach(element => {
      element.classList.add('visible');
      element.classList.add('image-visible');
    });
  } else {
    nativeMotionFallback();
    if (await loadMotionLibraries()) runGsapMotion();
    else if (window.AOS) window.AOS.init({ once: true, duration: 850, easing: 'ease-out-cubic' });
  }
  const slides = [...document.querySelectorAll('.hero-slide')];
  if (slides.length && !reducedMotion.matches) {
    let current = 0;
    const dots = [...document.querySelectorAll('.hero-dots button')];
    const progress = document.querySelector('.hero-progress span');
    let timer;
    const showSlide = next => {
      slides[current].classList.remove('active');
      dots[current]?.classList.remove('active');
      current = (next + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current]?.classList.add('active');
      const number = document.querySelector('.hero-current');
      if (number) number.textContent = `0${current + 1}`;
      if (progress) progress.style.transform = `translateX(${current * 100}%)`;
      const copy = document.querySelector('.hero-copy');
      if (copy && window.gsap) {
        window.gsap.fromTo(copy.children, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .65, stagger: .07, ease: 'power3.out', overwrite: true, clearProps: 'opacity,transform' });
      }
    };
    const restart = () => {
      clearInterval(timer);
      timer = setInterval(() => showSlide(current + 1), 5500);
    };
    document.querySelector('.hero-prev')?.addEventListener('click', () => { showSlide(current - 1); restart(); });
    document.querySelector('.hero-next')?.addEventListener('click', () => { showSlide(current + 1); restart(); });
    dots.forEach((dot, index) => dot.addEventListener('click', () => { showSlide(index); restart(); }));
    restart();
  }
  document.querySelectorAll('[data-counter]').forEach(el => {
    const target = Number(el.dataset.counter);
    let done = false;
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !done) {
        done = true; let n = 0; const step = Math.max(1, Math.ceil(target / 55));
        if (reducedMotion.matches) {
          el.textContent = target + '+';
          return;
        }
        const tick = setInterval(() => { n = Math.min(target, n + step); el.textContent = n + '+'; if (n >= target) clearInterval(tick); }, 28);
      }
    }); io.observe(el);
  });
}

shell();
renderCategoryPage();
renderProductDetail();
interactions();
