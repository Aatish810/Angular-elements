const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/events-portal/runtime-es2015.js',
    './dist/events-portal/polyfills-es2015.js',
    './dist/events-portal/main-es2015.js'
  ];

  await fs.ensureDir('mini-spa');
  await concat(files, 'mini-spa/mini-spa-element.js');
  await fs.copyFile(
    './dist/events-portal/styles.css',
    'mini-spa/styles.css'
  );
})();