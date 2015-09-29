angular.module('admin')
       .service('adminviewserv',adminviewserv)
function adminviewserv($http){
	this.view=function(){
		return $http.get('/pizzaview');
	}
	this.delivery=function(postid){
    console.log("httpyil",postid);
	return $http({
          method  : 'POST',
          url     : '/update',
          data    : postid, 
          headers : {'Content-Type': 'application/json'} 
         });
    }
}