(function () {

  angular
    .module('user', ['ngRoute','admin']);

  angular
    .module('user')
    .config(['$routeProvider',function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl:'/user/pizzalist/pizzalist.html',
            controller:'pizzaCtrl',
            controllerAs:'pCtrl'
          }).
          when('/cart', {
            templateUrl:'/user/pizzacart/pizzacart.html',
            controller:'pizzaorderCtrl',
            controllerAs:'poCtrl'
          }).
      
          when('/placeorder', {
            templateUrl:'/user/pizzaorder/pizzaorder.html',
            controller:'placeorderCtrl',
            controllerAs:'plCtrl'
          }).
          when('/:pizzaName', {
            templateUrl: '/user/pizzadesc/pizzadesc.html',
            controller:'pizzaDetailsCtrl',
            controllerAs:'pdCtrl'
  
          }).
            otherwise({
            redirectTo: '/'
          });
      }]);
})();