/*global define*/
define(['./module'], function(controllerModule) {
  controllerModule.controller('WpPostController', ['$scope', '$routeParams', 'WpRestService',
    function($scope, $routeParams, WpRestService) {

      $scope.selectedPostId = parseInt($routeParams.id, 10);

      var unwatchPostData = $scope.$watch('posts.data', function() {
        _.each($scope.posts.data, function(post) {
          if (post.ID === $scope.selectedPostId) {
            $scope.selectedPost = post;
            $scope.$emit('wpWeather:postDetail');
            return;
          }
        });
      });

      $scope.$on('wpWeather:postDetail', function() {
        WpRestService.getComments($scope.selectedPostId).then(function(response) {
          $scope.comments = response.data;
        });
      });

      $scope.$on('$destroy', function() {
        unwatchPostData();
      });
    }
  ]);
});