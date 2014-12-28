/*global define*/
define(['app'], function(app) {
  app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: './partials/list-posts.html'
        })
        .when('/post/:id', {
          templateUrl: './partials/post.html',
          controller: 'WpPostController'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ]);
});