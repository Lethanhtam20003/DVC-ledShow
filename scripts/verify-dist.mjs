import fs from 'node:fs';
import path from 'node:path';

const requiredFiles = [
  'dist/index.html',
  'dist/stage.html',
  'dist/.nojekyll',
];

for (const relPath of requiredFiles) {
  const fullPath = path.resolve(relPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`Missing build artifact: ${relPath}`);
    process.exit(1);
  }
}

for (const htmlFile of ['dist/index.html', 'dist/stage.html']) {
  const html = fs.readFileSync(path.resolve(htmlFile), 'utf8');
  if (!html.includes('./assets/')) {
    console.error(`${htmlFile} is missing relative ./assets/ references (required for GitHub Pages)`);
    process.exit(1);
  }
}

console.log('Verified dist/ artifacts for GitHub Pages successfully.');
