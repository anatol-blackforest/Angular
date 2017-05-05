//file 3 start
let myLifeApp = require('./module'); 
myLifeApp.controller('daybookAddCtrl', function($scope) {
	
    $scope.typeList = [
	    {track:"handler", type:'Действие'},
	    {track:"interval", type:'Интервал'},
	    {track:"group", type:'Группа'}
    ];
	
	let searcherAddNodeToData = function(array, id){
		
		array.forEach((i, index, arr) => {
			
			if(i.ID == id){
				
				if($scope.type){
					
					let obj = {};

					obj._type = $scope.type.track;
					obj.ID = Date.now();
					obj.value = $scope.value;
					
					if($scope.type.track){
						if($scope.type.track == "group"){
							obj.nodes = [];
						};
						if($scope.type.track == "interval" && isNaN(parseFloat($scope.value))){
							alert("Interval must be numeric!")
						}else{
							
							if(i.nodes){
								i.nodes.push(obj);
							}else{
								arr.push(obj);
							}
							
					    }
					}
					
				} 
			}else if(i.nodes){
				searcherAddNodeToData(i.nodes, id);
			}
			
		});
			
	};
	
	$scope.add = function(e, id){
		
		searcherAddNodeToData($scope.data, id);
		angular.element(e.target).toggleClass("show");
		$scope.value = "";
		
	};

	$scope.change = function(){

		if($scope.type.track == 'group'){
            $scope.placeholder = "Описание группы";
		}else if($scope.type.track == 'interval'){
            $scope.placeholder = "Часы";
		}else if($scope.type.track == 'handler'){
            $scope.placeholder = "Описание действия";
		};

	};
	
});
//file 3 end