angular.module('daybookModule', [])
.controller('DaybookCtrl', function($scope) {
	//model
	$scope.items = [
	   { 
		   fio: 'Дональд Трамп', 
		   sex: 'Mужской', 
		   contact: 'Вашингтон, Белый дом', 
		   data: '10 Nov 09:47:48', 
		   time: [
		      {day: 'Понедельник' , startwork: '9:00', endwork: '18:00'} ,
			  {day: 'Вторник' , startwork: '9:00', endwork: '18:00'} ,
			  {day: 'Среда' , startwork: '9:00', endwork: '18:00'} ,
			  {day: 'Четверг' , startwork: '9:00', endwork: '18:00'} ,
			  {day: 'Пятница' , startwork: '9:00', endwork: '17:00'} ,
		   ],
	   },
	   { 
		   fio: 'Барак Обама', 
		   sex: 'Mужской', 
		   contact: 'Нью Йорк', 
		   data: '10 Nov 09:47:47', 
		   time: [
		      {day: 'Понедельник' , startwork: '9:00', endwork: '18:00'} ,
			  {day: 'Вторник' , startwork: '9:00', endwork: '18:00'} ,
			  {day: 'Среда' , startwork: '9:00', endwork: '18:00'} ,
			  {day: 'Четверг' , startwork: '9:00', endwork: '18:00'} ,
			  {day: 'Пятница' , startwork: '9:00', endwork: '17:00'} ,
		   ],
	   },
	   { 
		   fio: 'Джордж Буш', 
		   sex: 'Mужской', 
		   contact: 'Ранчо в Техасе', 
		   data: '10 Nov 09:47:46', 
		   time: [
		      {day: 'Понедельник' , startwork: '9:00', endwork: '18:00'} ,
			  {day: 'Вторник' , startwork: '9:00', endwork: '18:00'} ,
			  {day: 'Среда' , startwork: '9:00', endwork: '18:00'} ,
			  {day: 'Четверг' , startwork: '9:00', endwork: '18:00'} ,
			  {day: 'Пятница' , startwork: '9:00', endwork: '17:00'} ,
		   ],
	   },
	   
	];
    $scope.getDate = new Date();
	
	$scope.structure = [
	   { 
	       departmentname: 'Мировая закулиса',
		   chief: $scope.items[0].fio,
		   subordinates: 'Барак Обама, Джордж Буш',
	   },
	];
	
	//controller
    $scope.addItem = function () {
		if (typeof $scope.itemFio !== 'string' || $scope.itemFio == '' || typeof $scope.itemContact !== 'string' || $scope.itemContact == '' ){
			    alert('Введите информацию'); 
	    }else if ($scope.itemSex == undefined){
				alert('Выберите пол'); 
		}else{
			$scope.items.push(
				{ 
					fio: $scope.itemFio, 
					sex: $scope.itemSex, 
					contact: $scope.itemContact, 
					data: $scope.getDate,
					time: [
						{day: 'Понедельник' , startwork: '-', endwork: '-'} ,
						{day: 'Вторник' , startwork: '-', endwork: '-'} ,
						{day: 'Среда' , startwork: '-', endwork: '-'} ,
						{day: 'Четверг' , startwork: '-', endwork: '-'} ,
						{day: 'Пятница' , startwork: '-', endwork: '-'} ,
					],
				}
			);
			$scope.itemFio = '';
			$scope.itemInfo = '';
			$scope.itemSex = 'Mужской';
			$scope.itemContact = '';
			$scope.getDate = new Date();
		}  
    };
	
	$scope.removeItem = function(i){
		$scope.items.splice(i,1);
	}
	
	
	//departments logic
	
	$scope.addDepartment = function () {
		
		console.log($scope.departmentChief);
		
		if (typeof $scope.departmentName !== 'string' || $scope.departmentName == ''){
			    alert('Введите информацию'); 
	    }else{
			$scope.structure.push(
				{ 
				   departmentname: $scope.departmentName,
				   chief: $scope.departmentChief,
				   subordinates: $scope.departmentSubordinates,
			    }
			);
			$scope.departmentName = '';
			$scope.departmentChief = $scope.items[0].fio;
		}  
    };
	
	$scope.removeDepartment = function(i){
		$scope.structure.splice(i,1);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	$scope.currentPage = 0;
	$scope.itemsPerPage = 2;
	$scope.firstPage = function() {
	    return $scope.currentPage == 0;
	}
	$scope.lastPage = function() {
		var lastPageNum = Math.ceil($scope.items.length / $scope.itemsPerPage - 1);
		return $scope.currentPage == lastPageNum;
	}
	$scope.numberOfPages = function(){
	    return Math.ceil($scope.items.length / $scope.itemsPerPage);
	}
	$scope.startingItem = function() {
	    return $scope.currentPage * $scope.itemsPerPage;
	}
	$scope.pageBack = function() {
	    $scope.currentPage = $scope.currentPage - 1;
	}
	$scope.pageForward = function() {
	    $scope.currentPage = $scope.currentPage + 1;
	}
	
	
})
.filter('startFrom', function(){
  return function(input, start){
    start = +start;
    return input.slice(start);
  }
})















