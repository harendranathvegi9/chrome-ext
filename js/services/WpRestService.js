/*global define*/
define(['./module'], function(serviceModule) {
  serviceModule.service('WpRestService', ['$http',
    function($http) {
      return {
        getPosts: function() {
          return $http.get('https://public-api.wordpress.com/rest/v1/sites/wavesnsands.wordpress.com/posts/?number=100&offset=58-158');
        },
        getComments: function(postId) {
          return $http.get('https://public-api.wordpress.com/rest/v1/sites/wavesnsands.wordpress.com/posts/' + postId + '/replies/?hierarchical=true&number=100');
        }
      };
    }
  ]);
});