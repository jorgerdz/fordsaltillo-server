'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication', '$http',
	function($scope, Authentication, $http) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$http.get('/api/users/all').success(function(data){
			$scope.users = data;
		});
	}
]);
