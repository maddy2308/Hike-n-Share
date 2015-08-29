(function () {
  angular.module("BundleModule").factory('FacebookService', facebookService);

  facebookService.$inject = ['$q'];

  function facebookService($q) {
    var service = {
      getMyLastName: getMyLastName
    };

    function getMyLastName() {
      var deferred = $q.defer();
      FB.api('/me', {
        fields: 'last_name'
      }, function (response) {
        if (!response || response.error) {
          deferred.reject('Error occured');
        } else {
          deferred.resolve(response);
        }
      });
      return deferred.promise;
    }

    return service;
  }

})();