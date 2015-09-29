angular
.module('user')
.controller('pizzaCtrl', pizzaCtrl);
function pizzaCtrl(pizzaserv){
        var vm=this;
        vm.details=pizzaserv.getpizza();
        vm.details.success(function(data){
        vm.details1=data;
    });
};