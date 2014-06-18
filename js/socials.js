(function() {
	var app = angular.module('my-app-socials', []);

	app.controller('SocialController', ["$http", function($http) {
		var SC = this;
		SC.list = [];
		$http.get("data/social-list.json").success(function(data){
			SC.list = data;
		}).error(function() {
			console.log("Data fail to load");
			}		
		);
	}]);

	app.directive("socialList", function(){
		return {
			restrict: "E",
			templateUrl: "template/social-list.html",
			scope: {
				social_style: "@"
			}
		};
	});
})();