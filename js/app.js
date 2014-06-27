(function() {
	var app = angular.module('my-app', ["my-app-socials"]);

	app.controller('myCtrl', function($scope) {
		$scope.info = {
			admin: {
				name: {
					first: "Luke",
					last: "Lu",
					nick: "Lusketeer"
				}
			}
		}
	});
})();