const fs = require('fs-extra');
const concat = require('concat');


(async function build() {

    const files = [
        './dist/hello-world/runtime-es2015.js',
        './dist/hello-world/polyfills-es2015.js',
        './dist/hello-world/main-es2015.js'
    ];

    await fs.ensureDir('hello-world');
    await concat(files, 'hello-world/hello-world-element.js');
    await fs.copyFile(
        './dist/hello-world/styles.css',
        'hello-world/style.css'
    )

})();