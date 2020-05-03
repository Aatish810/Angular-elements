const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/weather-report-widgets/runtime-es2015.js',
    './dist/weather-report-widgets/polyfills-es2015.js',
    './dist/weather-report-widgets/main-es2015.js'
  ];

  await fs.ensureDir('weather-report-widgets');
  await concat(files, 'weather-report-widgets/weather-report-widgets.js');
  await fs.copyFile(
    './dist/weather-report-widgets/styles.css',
    'weather-report-widgets/styles.css'
  );
})();