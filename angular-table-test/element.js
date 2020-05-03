const fs = require('fs-extra');
const concat = require('concat');

(async function() {
    const files = [
        './dist/angular-table-section3/runtime-es2015.js',
        './dist/angular-table-section3/polyfills-es2015.js',
        './dist/angular-table-section3/main-es2015.js'
    ];

    await fs.ensureDir('angular-table');
    await concat(files, 'angular-table/angular-table.js')  
    await fs.copyFile(
        './dist/angular-table-section3/styles.css',
        'angular-table/styles.css')
})();
