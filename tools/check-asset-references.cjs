const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const assetExtensions = /\.(?:css|js|png|jpe?g|webp|svg|gif|ico|woff2?|ttf|otf)$/i;
const textExtensions = /\.(?:html|css|js)$/i;
const ignoredDirs = new Set(['.git']);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoredDirs.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else {
      files.push(path.relative(root, fullPath).replace(/\\/g, '/'));
    }
  }
  return files;
}

function normalizeReference(file, reference) {
  const clean = reference.split('#')[0].split('?')[0].trim();
  if (!clean || /^(?:https?:|mailto:|tel:|data:|#)/i.test(clean)) return null;
  if (file.endsWith('.js') && clean.startsWith('assets/')) return path.posix.normalize(clean);
  if (clean.includes('${')) return null;
  if (clean.startsWith('/')) return path.posix.normalize(clean.slice(1));
  const base = path.posix.dirname(file);
  return path.posix.normalize((base === '.' ? '' : `${base}/`) + clean);
}

function collectReferences(file, text) {
  const references = [];
  const patterns = [
    /(?:href|src)=["']([^"']+)["']/gi,
    /url\(\s*["']?([^"')]+)["']?\s*\)/gi,
    /["'](assets\/[^"']+)["']/gi
  ];

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(text))) {
      const reference = match[1].trim();
      if (assetExtensions.test(reference.split('#')[0].split('?')[0])) {
        references.push(reference);
      }
    }
  }

  return [...new Set(references)];
}

const files = walk(root);
const tracked = new Set(files);
const caseLookup = new Map(files.map(file => [file.toLowerCase(), file]));
const missing = [];
const caseMismatches = [];

for (const file of files.filter(file => textExtensions.test(file))) {
  const text = fs.readFileSync(path.join(root, file), 'utf8');
  for (const reference of collectReferences(file, text)) {
    const target = normalizeReference(file, reference);
    if (!target) continue;
    if (tracked.has(target)) continue;
    const actual = caseLookup.get(target.toLowerCase());
    if (actual) {
      caseMismatches.push({ file, reference, target, actual });
    } else {
      missing.push({ file, reference, target });
    }
  }
}

if (missing.length || caseMismatches.length) {
  if (missing.length) {
    console.error('Missing asset references:');
    for (const item of missing) {
      console.error(`- ${item.file}: ${item.reference} -> ${item.target}`);
    }
  }
  if (caseMismatches.length) {
    console.error('Case-mismatched asset references:');
    for (const item of caseMismatches) {
      console.error(`- ${item.file}: ${item.reference} -> ${item.target} should be ${item.actual}`);
    }
  }
  process.exit(1);
}

console.log(`OK: ${files.filter(file => textExtensions.test(file)).length} text files checked; no missing or case-mismatched local asset references.`);
