//file 2 start
let myLifeApp = require('./module'); 
myLifeApp.controller('daybookCtrl', function($scope) {
	$scope.groupID = 0;
	$scope.data = require('./data');
	
	$scope.open = function(e, id){
		let form = `#form-${id}`;
		angular.element(document.querySelector(form)).toggleClass("show");
	};
	
	let searcherDelNode = function(arr, id){
		arr.forEach((i, index, arr) => {
			if(i.ID == id){
				arr.splice(index, 1)
			}else if(i.nodes){
				searcherDelNode(i.nodes, id);
			}
		})
	};
	
	$scope.delete = function(id){
		searcherDelNode($scope.data, id);
	};
	
});
//file 2 end