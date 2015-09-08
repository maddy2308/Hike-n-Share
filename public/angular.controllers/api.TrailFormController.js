(function(){
  angular.module("TrailModule").controller("TrailFormController", TrailFormController);

  TrailFormController.$inject = ['TrailClientService', '$sce'];

  function TrailFormController(trailClientService, $sce) {

    var vm = this;

    // methods on scope
    vm.getTrailData = getTrailData;
    vm.getImageURI = getImageURI;
    vm.decodeHtmlContent = decodeHtmlContent;

    // properties on scope
    vm.trailData = [];

    init();
    function init(){
      getTrailData();
    }

    function getTrailData() {

      var query = {
        limit : 200,
        lat : '',
        lon : '',
        'q[activities_activity_name_cont]' : '',
        'q[activities_activity_type_name_eq]' : 'hiking',
        'q[country_cont]' : '',
        'q[state_cont]' : '',
        'q[city_cont]' : '',
        radius : 25
      };

      return trailClientService.getTrailData(query).then(function (response) {

        if(response instanceof Error){
          swal("Error", "Couldn't find any trails requested by you", "error");
          response = [];
        }
        vm.trailData = response;
      });
    }

    function getImageURI(activity, uri){
      if(!uri){
        activity.attr("src", "images/no_image_available.png");
      }
    }

    function decodeHtmlContent(value){
      return $sce.trustAsHtml(value);
    }

  }


})();