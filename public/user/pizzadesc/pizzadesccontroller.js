angular.module('user')
       .controller('pizzaDetailsCtrl',pizzaDetailsCtrl);


function pizzaDetailsCtrl($routeParams, $http,pizzaserv,pizzadescserv){
        var vm=this;
        vm.name = $routeParams.pizzaName;
        vm.details=pizzaserv.getpizza();
        vm.details.success(function (data) {
         vm.pizza = data.filter(function (entry){
             return entry.name === vm.name;
            })[0];
            
            var user={};

          vm.enter=function(){
            user.pname=vm.pizza.name;
            user.rate=vm.pizza.rate;
            user.pic=vm.pizza.image;
            user.qty=vm.user.qty;
            user.cost=user.rate*user.qty;
           
            pizzadescserv.p1(user);
           // console.log(pizzadescserv.p2());
          }
        });
      }