'use strict';

angular.module('core').controller('HomeController', ['$scope', '$modal', 'Authentication', '$http',
	function($scope, $modal, Authentication, $http) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$http.get('/api/users/all').success(function(data){
			$scope.users = data;
		});

		$scope.selectAll = function(){
			$scope.users.forEach(function(data){
				data.selected = true;
			});
		};

		$scope.openModal = function(){
			var selectedUsers = [];
			$scope.users.forEach(function(data){
				if(data.selected)
					selectedUsers.push({id : data._id});
			});
			$modal.open({
				templateUrl: 'modules/core/views/modal.client.view.html',
				controller: 'ModalController',
				size : 'md',
				resolve : {
				  users: function () {
				    return selectedUsers;
				  }
				}
				}).result.then(function(data){
			});
		}
	}
]);
