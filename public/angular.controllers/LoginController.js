(function(){
  angular.module("loginModule").controller("LoginController", loginController);

  loginController.$inject = ['$http', '$q', 'FacebookService'];

  function loginController($http, $q, facebookService){
    var vm = this;

    vm.getLastName = getLastName;
    vm.login = login;

    function login() {
      FB.login(function(response) {
        if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          FB.api('/me', function(response) {
            console.log('Good to see you, ' + response.name + '.');
          });
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      });
    }

    function getLastName() {
      facebookService.getMyLastName()
          .then(function (response) {
            vm.last_name = response.last_name;
          }
      );
    }
  }


})();