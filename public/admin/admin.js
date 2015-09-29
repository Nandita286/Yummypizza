

  angular
    .module('admin', ['ngRoute','user']);

  angular
    .module('admin')
    .config(function($routeProvider) {
        $routeProvider.
           when('/login', {
            templateUrl:'/admin/admin view/adminview.html',
            controller:'loginCtrl',
            controllerAs:'lctrl'
          }).
           otherwise({
            redirectTo: '/'
          });
      });
