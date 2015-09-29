  angular.module('user')
  .service('pizzaorderservice',pizzaorderservice)

function pizzaorderservice($http){
     
      
      this.pizzaorder=function(postuser){
        
        return $http({
          method  : 'POST',
          url     : '/pizzaorder',
          data    : postuser, 
          headers : {'Content-Type': 'application/json'} 
         });
     }
      }
