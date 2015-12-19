angular.module('directoryApp',[])
	.controller('directoryController',function($scope){

		$scope.list = [
			{name:'Scott', age:29},
			{name:'Ross', age:29},
			{name:'Ben', age:29},
			{name:'Courtney', age:29}
		];

		$scope.addPerson = function(){
			$scope.list.push({
				name : $scope.name,
				age  : $scope.age
			});
			
			$scope.name = "";
			$scope.age  = "";
		}

	});