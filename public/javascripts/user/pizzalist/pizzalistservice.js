angular.module('user')
       .service('pizzaserv', pizzaserv);

       function pizzaserv($http){
       
        this.getpizza=function(){
        return $http.get('/pizza');
    }
       }