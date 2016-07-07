angular.module('validator', ['ngMaterial'])

.controller('MainCtrl', function($scope){
 	$scope.posts = [
 		{title: 'accomplishment 1', upvotes: 5},
 		{title: 'accomplishment 2', upvotes: 2},
 		{title: 'accomplishment 3', upvotes: 8},
 		{title: 'accomplishment 4', upvotes: 9},
 		{title: 'accomplishment 5', upvotes: 4}		
 	];
 	$scope.addPost = function(){
 		if(!$scope.title || $scope.title === ''){ return; };
 		$scope.posts.push({
 			title: $scope.title,
 			link: $scope.link, 
 			upvotes: 0
 		});
 		$scope.title = '';
 		$scope.link = '';
 	};
 	$scope.incrementUpvotes = function(post){
 		post.upvotes += 1;
 	};
 })
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});

