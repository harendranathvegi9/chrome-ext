angular.module('wpWeather', [
  'ngRoute',
  'ngSanitize',
  'wpWeather.service',
  'wpWeather.controller',
  'wpWeather.directive',
  'wpWeather.filter'
]).config(['$routeProvider', '$locationProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './templates/list-posts.html'
      })
      .when('/post/:id', {
        templateUrl: './templates/post.html',
        controller: 'PostController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
angular.module('wpWeather.service', []);
angular.module('wpWeather.controller', []);
angular.module('wpWeather.directive', []);
angular.module('wpWeather.filter', []);