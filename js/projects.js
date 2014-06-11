(function() {
	var app = angular.module('my-app-projects', []);

	app.controller('ProjectController', function() {
		this.projects = projects;
	});

	app.directive("projectList", function(){
		return {
			restrict: "E",
			templateUrl: "../template/project-list.html"
		};
	});

	var projects = [
	    { heading: 'Azurite', summary: "Integer nec metus vitae nunc volutpat molestie nec vel odio. Cras venenatis tortor sed justo interdum venenatis. Integer nec metus vitae nunc volutpat molestie nec vel odio. Cras venenatis tortor sed justo interdum venenatis." },
	    { heading: 'Bloodstone', summary: "Integer nec metus vitae nunc volutpat molestie nec vel odio. Cras venenatis tortor sed justo interdum venenatis. Integer nec metus vitae nunc volutpat molestie nec vel odio. Cras venenatis tortor sed justo interdum venenatis." },
	    { heading: 'Zircon', summary: "Integer nec metus vitae nunc volutpat molestie nec vel odio. Cras venenatis tortor sed justo interdum venenatis. Integer nec metus vitae nunc volutpat molestie nec vel odio. Cras venenatis tortor sed justo interdum venenatis." },
	  ];
})();