(function() {
	var app = angular.module('my-app-projects', []);

	app.controller('ProjectController', ["$http", function($http) {
		var PC = this;
		PC.projects = [];
		$http.get("data/project-list.json").success(function(data){
			PC.projects = data;
		}).error(function() {
			console.log("Data fail to load");
			}		
		);
		// this.projects = projects;
	}]);

	app.directive("projectList", function(){
		return {
			restrict: "E",
			templateUrl: "template/project-list.html"
		};
	});
})();