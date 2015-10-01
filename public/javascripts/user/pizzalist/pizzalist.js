angular
.module('user')
.controller('pizzaCtrl', pizzaCtrl);
function pizzaCtrl(pizzaserv,$location){
        var vm=this;
        vm.details=pizzaserv.getpizza();
        vm.details.success(function(data){
        vm.details1=data;
    });

        vm.login=function(){
         if(vm.user=='admin'&& vm.password=='admin'){
             $location.path('login');
         }
         else{
         	alert("login failed!Try again");
         }
    }
}