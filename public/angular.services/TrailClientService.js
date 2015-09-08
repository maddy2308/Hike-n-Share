(function(){
  angular.module("BundleModule").factory("TrailClientService", TrailClientService);

  TrailClientService.$inject = ["$http"];

  function TrailClientService($http) {

    var BASE_URL = "https://trailapi-trailapi.p.mashape.com/";
    var headers = {
        "X-Mashape-Key": "aFYcA7AYJqmshWjL496gUjxG6J5Gp1zvu7TjsnPx91ezy57x3h",
        "Accept": "text/plain"
    };
    var req = {
      method: 'GET',
      url: BASE_URL,
      headers: headers,
      params: ''
    };


    return {
      getTrailData : getTrailData
    };

    function getTrailData(queryParams) {
      req.params = queryParams;
      return $http(req).then(getResultList, getResultListFailed);
    }

    function getResultList(response){
      return response.data.places;
    }

    function getResultListFailed(err) {
      return err;
    }
  }

})();