angular.module('user')
        .controller('placeorderCtrl',placeorderCtrl);
         function placeorderCtrl(pizzaorderservice,pizzadescserv){
            var vm=this;
            vm.message=function(){
          alert("Thankyou,your order has been placed!Push your hunger away with YUMMY PIZZA!");
       
    
        vm.postdata=pizzadescserv.p2();
        vm.user.order=vm.postdata;
        vm.user.deliverystatus=true;

          pizzaorderservice.pizzaorder(vm.user).success(function(data) {
            
            if (data.errors) {
             vm.errorName = data.errors.name;
             vm.errorUserName = data.errors.username;
              vm.errorEmail = data.errors.email;
            } else {
              vm.message = data.message;
            }
          });
       }
      }