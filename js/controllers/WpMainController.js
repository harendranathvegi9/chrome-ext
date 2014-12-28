/*global define*/
define(['./module'], function(controllerModule) {
  controllerModule.controller('WpMainController', ['$scope', 'WpRestService',
    function($scope, WpRestService) {
      $scope.app = {};
      $scope.app.appName = 'Wordpress Weather';
      $scope.posts = {};
      $scope.gotPosts = WpRestService.getPosts();
      $scope.gotPosts.then(function(response) {
        $scope.posts.data = response.data.posts;
        $scope.posts.totalCount = response.data.found;
        $scope.$broadcast('wpWeather:gotPosts', [response.data]);
        $scope.hasPagination = ($scope.posts.totalCount / $scope.posts.data.length <= 1) ? false : true;
      });
    }
  ]);
});