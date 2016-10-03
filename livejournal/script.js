angular.module('daybookModule', ['ngMaterial'])
.controller('DaybookCtrl', function($scope, $mdDialog, $mdMedia) {
	
	$scope.items = [{ title: "Путешествие в Иерусалим", text: 'Преславутая гора Сион представляет из себя холм примыкающий к Старому Иерусалиму с юга. Тут расположены гробница царя Давида, горница тайной вечери и роскошный собор-дормицион. Горница тайной вечери переходила из рук в руки во время крестовых походов. Комната исполненная рыцарями в готическом стиле на предполагаемом месте последней вечери Христа с апостолами позже дополнена исламскими элементами. Дормицион - архитектурная доминанта Сиона. Гефсиманский сад находится во дворе францисканской церкви всех наций у подножия Масличной горы. Некоторым оливам по две тысячи лет, ровестницы Иисуса. Храм Гроба был заложен еще в Византийский период и реконструирован во времена крестовых походов. Впоследствии претерпевал еще ряд реконструкций и перестроек. Снаружи выглядит значительно меньше, нежели внутри. Практически все значимые места трех последних дней Христа расположены здесь. Храм представляет из себя сооружение возведенное прямо над Голгофой и окрестностями.', data: '27 черв. 04:21:24', mark: 'Путешествия', visible: true }];
    $scope.tags = ['Путешествия'];
    $scope.getDate = new Date();
	$scope.limitValue = 1;
	$scope.writer = true;
	$scope.itemMark;
	$scope.writeInBlog = function () {
		$scope.writer = false;
	}
	$scope.writeInBlogClose = function () {
		$scope.writer = true;
	}
	function unique(arr) {
	  nextInput:
		for (var i = 0; i < arr.length; i++) {
		  var str = arr[i].mark; // для каждого элемента
		  for (var j = 0; j < $scope.tags.length; j++) { // ищем, был ли он уже?
			if ($scope.tags[j] == str) continue nextInput; // если да, то следующий
		  }
		  $scope.tags.push(str);
		}
	}
    $scope.addItem = function () {
		if (typeof $scope.itemText == 'string' && $scope.itemText != ''){
				if(typeof $scope.itemTitle == 'string' && $scope.itemTitle != ''){
					if(typeof $scope.itemMark == 'string' && $scope.itemMark != ''){
						$scope.items.unshift({ title: $scope.itemTitle, text: $scope.itemText, data: $scope.getDate, mark: $scope.itemMark, visible: true });
					}else{
						$scope.items.unshift({ title: $scope.itemTitle, text: $scope.itemText, data: $scope.getDate, mark: 'Без категории', visible: true });
					}
				}else{
					if(typeof $scope.itemMark == 'string' && $scope.itemMark != ''){
						$scope.items.unshift({ title: "Без названия", text: $scope.itemText, data: $scope.getDate, mark: $scope.itemMark, visible: true });
					}else{
						$scope.items.unshift({ title: "Без названия", text: $scope.itemText, data: $scope.getDate, mark: 'Без категории', visible: true });
					}
				} 
				$scope.limitValue = $scope.limitValue + 1;
				$scope.limitRange = [];
				for (var i = 1; i <= $scope.items.length; i++) {
					$scope.limitRange.push(i);
				}
				$scope.itemTitle = '';
				$scope.itemText = '';
				$scope.itemMark = '';
				$scope.getDate = new Date();
				$scope.writer = true;
		}else{
				$mdDialog.show(
				  $mdDialog.alert()
					.parent(angular.element(document.querySelector('#popupContainer')))
					.clickOutsideToClose(true)
					.title('Введите ваше собщение!')
					.textContent('Вы должны ввести сообщение перед отправкой')
					.ariaLabel('Alert Dialog Demo')
					.ok('Закрыть')
				);
		} 
		unique($scope.items);
    };
	$scope.removeItem = function(i){
		$scope.items.splice(i,1);
	}
	
	$scope.editItem = function(i){
		$scope.items[i].visible = false;
	}
	
	$scope.edition = function(i){
		$scope.items[i].visible = true;
		unique($scope.items);
	}
	$scope.selectByTag = function(item){
		$scope.itemfilter = item;
		return $scope.itemfilter;
	}
	
});

















