(function () {
  angular.module("BundleModule").directive('onFinishRender', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        if (scope.$last === true) {
          element.ready(function () {
            stroll.bind( document.getElementById('trail-list'));
          });
        }
      }
    }
  });

})();