'use strict';

angular.module('core').controller('ModalController', ['$scope', '$modalInstance', 'users', 'Authentication', '$http',
	function($scope, $modalInstance, users, Authentication, $http) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		console.log(users.length)
		console.log(users)

		$scope.available = users.length > 0;

	    $scope.ok = function() {
	      $modalInstance.close($scope.car);
	    };

	    $scope.send = function(){
	    	var obj = {
	    		title : $scope.message.title,
	    		description : $scope.message.description,
	    		users : users
	    	};
	    	$http.post('/notifications', obj).success(function(){
	    		$scope.success = true;
	    	}).error(function(){
	    		$scope.error = true;
	    	});
	    }
	}
]);
