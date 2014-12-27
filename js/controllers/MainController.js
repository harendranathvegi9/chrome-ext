angular.module('wpWeather.controller').controller('MainController', ['$scope', '$location', 'WpRestService',
  function($scope, $location, WpRestService) {
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

    $scope.showPostDetail = function(postId) {
      $location.path('/post/' + postId);
    };
  }
]);