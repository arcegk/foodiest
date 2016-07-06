'use strict';

/**
 * @ngdoc overview
 * @name guaApp
 * @description
 * # guaApp
 *
 * Main module of the application.
 */
angular
  .module('FoddieApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'menuController',
        controllerAs: 'menu'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
