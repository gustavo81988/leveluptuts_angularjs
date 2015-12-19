angular.module('directoryApp',[])
	.controller('directoryController',function(){

		var dirList = this;
		dirList.list = [
			{name:'Scott', age:29},
			{name:'Ross', age:29},
			{name:'Ben', age:29},
			{name:'Courtney', age:29}
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