(function () {
  angular.module("BundleModule").directive('fallbackSrc', function () {
    return {
      link: function(scope, element, attrs) {
        element.bind('error', function() {
          angular.element(this).attr("src", attrs.fallbackSrc);
        });
      }
    };
  });

})();