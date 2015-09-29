angular.module('user')
       .controller('pizzaorderCtrl', pizzaorderCtrl);

        function pizzaorderCtrl(pizzadescserv){
          var vm=this;
          vm.details = pizzadescserv.p2();
          vm.total=pizzadescserv.p3();
          console.log(vm.details);
      
      };