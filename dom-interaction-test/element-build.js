const fs = require('fs-extra');
const concat = require('concat');

(async function() {

    const files = [
        './dist/dom-interaction-section2/runtime-es2015.js',
        './dist/dom-interaction-section2/polyfills-es2015.js',
        './dist/dom-interaction-section2/main-es2015.js'
    ];

    await fs.ensureDir('dom-interaction');
    await concat(files, 'dom-interaction/dom-interaction-ex.js');

    await fs.copyFile(
        './dist/dom-interaction-section2/styles.css',
        'dom-interaction/style.css'
    )

})();