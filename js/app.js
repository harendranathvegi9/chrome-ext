/*global define*/
define([
  'angular',
  'jquery',
  'angularroute',
  'angularsanitize',
  'underscore',
  'modules'
], function(angular) {
  var wpWeather = angular.module('wpWeather', [
    'ngRoute',
    'ngSanitize',
    //'wpWeather.filter',
    'wpWeather.service',
    'wpWeather.directive',
    'wpWeather.controller'
  ]);
  return wpWeather;
});