angular.module('directoryApp',[])
	.controller('directoryController',function(){

		var dirList = this;
		dirList.list = [
			{name:'Scott', age:29},
			{name:'Ross', age:31},
			{name:'Ben', age:32},
			{name:'Courtney', age:33}
		];

		dirList.addPerson = function(){
			dirList.list.push({
				name : dirList.name,
				age  : dirList.age
			});

			dirList.name = "";
			dirList.age  = "";
		}

	});