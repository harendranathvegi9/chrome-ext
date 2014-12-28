/*global define*/
define(['./../module'], function(directiveModule) {
  directiveModule.directive('wpListPosts', ['$location',

    function($location) {
      return {
        restrict: 'E',
        replace: true,
        scope: {
          posts: '='
        },
        templateUrl: 'js/directives/WpListPosts/WpListPosts.html',
        link: function(scope) {
          scope.showPostDetail = function(postId) {
            $location.path('/post/' + postId);
          };
        }
      };
    }
  ]);
});