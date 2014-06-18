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
		// this.projects = [
		// 	{	"heading": "Github", 
		// 		"summary": "Integer nec metus vitae nunc volutpat molestie nec vel odio. Cras venenatis tortor sed justo interdum venenatis. Integer nec metus vitae nunc volutpat molestie nec vel odio. Cras venenatis tortor sed justo interdum venenatis.",
		// 		"url": "http://github.com/lusketeer" 
		// 	},
		// 	{	"heading": "Azurite", 
		// 		"summary": "Integer nec metus vitae nunc volutpat molestie nec vel odio. Cras venenatis tortor sed justo interdum venenatis. Integer nec metus vitae nunc volutpat molestie nec vel odio. Cras venenatis tortor sed justo interdum venenatis.",
		// 		"url": "#"
		// 	},
		// 	{	"heading": "Bloodstone", 
		// 		"summary": "Integer nec metus vitae nunc volutpat molestie nec vel odio. Cras venenatis tortor sed justo interdum venenatis. Integer nec metus vitae nunc volutpat molestie nec vel odio. Cras venenatis tortor sed justo interdum venenatis.", 
		// 		"url": "#"  
		// 	},
		// 	{ 	"heading": "Zircon", 
		// 		"summary": "Integer nec metus vitae nunc volutpat molestie nec vel odio. Cras venenatis tortor sed justo interdum venenatis. Integer nec metus vitae nunc volutpat molestie nec vel odio. Cras venenatis tortor sed justo interdum venenatis.",
		// 		"url": "#"
		// 	},
		// 	{ 	"heading": "Vircon", 
		// 		"summary": "Integer nec metus vitae nunc volutpat molestie nec vel odio. Cras venenatis tortor sed justo interdum venenatis. Integer nec metus vitae nunc volutpat molestie nec vel odio. Cras venenatis tortor sed justo interdum venenatis.",
		// 		"url": "#"
		// 	}
		// ];
	}]);

	app.directive("projectList", function(){
		return {
			restrict: "E",
			templateUrl: "template/project-list.html"
		};
	});
})();