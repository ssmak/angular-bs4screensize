<h1 align="center">angular-bs4screensize</h1>

<h5 align="center">Get breakpoints information in AngularJS based on Bootstrap 4.
</h5>
<br />
<div align="center">
  <a href="https://github.com/ssmak/angular-bs4screensize">
    <img src="https://img.shields.io/badge/version-v1.2.4-blueviolet.svg" />
  </a>
  <a href="https://www.npmjs.com/package/angular-bs4screensize">
    <img src="https://img.shields.io/badge/env-angularjs-orange.svg" />
  </a>
</div>
<br />

## History
Get breakpoints information in AngularJS controller.
<br />
<div align="center">
  <a href="https://paypal.me/ssmak">
    <img src="https://img.shields.io/badge/Donate-PayPal-green.svg" alt="PayPal Donation" />
  </a>
  <br />
  <a href="https://paypal.me/ssmak">
    <img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg" alt="PayPal" />
  </a>
</div>

## Installation + Use
1. Install the npm package
``` bash
npm install angular-bs4screensize --save
```

2. Add the script tag below the official AngularJS library
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.2/angular.min.js"></script>
<script src="./node_modules/angular-bs4screensize/dist/bs4screensize.min.js"></script>
```

3. Add the module as dependency
```html
const ngApp = angular.module('ng-app', ['bs4ScreenSize']);
```

4. Inject to your root controller
```html
ngApp.controller('ng-ctrl', ($scope, $window, bs4ScreenSize) => {
  $scope.screenInfo = {
    width: null,
    breakpoint: null
  };

  $window.addEventListener('resize', () => {
    $scope.updateScreenSize();
    $scope.$apply();
  });

  $scope.updateScreenSize = () => {
    $scope.screenInfo.breakpoint = bs4ScreenSize.getState();
    $scope.screenInfo.width = bs4ScreenSize.getWidth();
  }

  // Initialize
  $scope.updateScreenSize();
});
```

## Test
You can find the test page in ./node_modules/angular-bs4screensize/test/index.html

## License
MIT
