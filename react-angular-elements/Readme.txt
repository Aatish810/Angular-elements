When we add multiple angular-elements for each element a ngbootstrap is called. So we cannot generate a complete build and 
must create a small build and reference files direcly in index.html. To Do so follow below steps.

1. Instead of using cli for making a bundle we use ngx-build-plus.
 Add this package to angular project using ng add ngx-build-puls. This package will be used to create minimum bundle.

2. Then install webcomponents using npm install @webcomponents/custom-elements --save

3. Create a file in root of project named webpack.extra.js and below 
module.exports = {
    "externals": {
        "rxjs": "rxjs",
        "@angular/core": "ng.core",
        "@angular/common": "ng.common",
        "@angular/platform-browser": "ng.platformBrowser",
        "@angular/elements": "ng.elements"
    }
}

4. Change build command as below, (keep both commands in package.json so that we can generate both types of builds)
   to this --> "ngx-build":"ng build --prod --extraWebpackConfig webpack.extra.js --output-hashing none --single-bundle true",
   from this -->  "build:weather-report-element": "ng build --prod --output-hashing none && node elements-build.js"

5. Now a build folder will be generated copy that folder to project and in index.html file refer to below points-
    <script src="assets/custom-elements/src/native-shim.js"></script>

    <!-- Polyfills for Browsers not supporting
           Custom Elements. See: @webcomponents/custom-elements
      -->
    <script src="assets/custom-elements/custom-elements.min.js"></script>
    <script src="assets/zone.js/zone.min.js"></script>
  
    <!-- Rx -->
    <script src="assets/rxjs/rxjs.umd.min.js"></script>
  
    <!-- Angular Packages -->
    <script src="assets/core/bundles/core.umd.js"></script>
    <script src="assets/common/bundles/common.umd.js"></script>
    <script src="assets/platform-browser/bundles/platform-browser.umd.js"></script>
    <script src="assets/elements/bundles/elements.umd.js"></script>
    <script src="main-es2015.js"></script>

6. Now we can call our element in any component we want to use it in.
