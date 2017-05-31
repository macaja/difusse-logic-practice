'use strict';

/**
 * @ngdoc overview
 * @name janusApp
 * @description
 * # janusApp
 *
 * Main module of the application.
 */
angular
  .module('janusApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
          url: '/home',
          templateUrl: '../views/main.html',
          controller: 'MainCtrl'
      })
  });
