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
    'ngTouch',
    'angularModalService'
  ]).factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {

      config.headers['Authorization'] = 'jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo4LCJlbWFpbCI6IiIsImV4cCI6MTQ3MTY3Mzg0NiwidXNlcm5hbWUiOiJrZXYifQ.KOc_HnT154CZ8FwGZYnb0lOzFcUDDrmy0LnV4IFkngc';

      return config;
    }
  };
  })
  .config(function ($routeProvider,  $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
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

    $httpProvider.interceptors.push('httpRequestInterceptor');
  });
