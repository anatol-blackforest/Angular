myLifeApp.controller('daybookCtrl', function($scope) {
	$scope.groupID = 0;
	$scope.data = [
		{
			ID: 1493822251930,
			_type: "handler",
			value: "Сделал кофе"
		},
		{
			ID: 1493822251940,
			_type: "interval",
			value : 1
		},
		{
			_type: "group",
			ID: 1493822251950,
			value: "Пошел в магазин",
			nodes: [
				{
					ID: 1493822251970,
					_type: "handler",
					value: "Купил сигарет"
				},
				{
					ID: 1493822251980,
					_type: "handler",
					value: "Купил бухла"
				},
				{    
					ID: 1493822251990,
					_type: "group",
					value: "Ушел с магазина",
					nodes: [
						{
							ID: 1493822288880,
							_type: "handler",
							value: "Ограблен"
						}
					]
				}
			]
		}
	];
	
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

















