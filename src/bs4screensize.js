'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  var bs4ScreenSize = function bs4ScreenSize(angular) {
    angular.module('bs4ScreenSize', []).factory('bs4ScreenSize', function ($window) {
      var bs4ScreenSize = {
        breakPoint: {
          sm: 576,
          md: 768,
          lg: 992,
          xl: 1200
        },
        getWidth: function getWidth() {
          return $window.innerWidth;
        },
        getState: function getState() {
          var screenSize = 'xs';
          var getWindowWidth = function getWindowWidth() {
            return bs4ScreenSize.getWidth();
          };
          if (getWindowWidth() >= bs4ScreenSize.breakPoint.sm) {
            screenSize = 'sm';
          }
          if (getWindowWidth() >= bs4ScreenSize.breakPoint.md) {
            screenSize = 'md';
          }
          if (getWindowWidth() >= bs4ScreenSize.breakPoint.lg) {
            screenSize = 'lg';
          }
          if (getWindowWidth() >= bs4ScreenSize.breakPoint.xl) {
            screenSize = 'xl';
          }

          return screenSize;
        }
      };

      return bs4ScreenSize;
    });
  };

  // check if load by web browser and Angular already loaded
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && _typeof(window.angular) === 'object') {
    // load from web browser and Angular is found -> append to Angular directly
    bs4ScreenSize(window.angular);
  } else
    // chech if load by module loader
    if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
      // load as module
      module.exports = bs4ScreenSize;
    } else {
      // not supported loading methods
    }
})();
//# sourceMappingURL=bs4screensize.js.map