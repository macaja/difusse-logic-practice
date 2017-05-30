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
      .state('home.triangle', {
          url: '/triangle',
          templateUrl: '../views/triangle.html',
          controller: 'MainCtrl'
      })
      .state('home.trapezoid', {
          url: '/trapezoid',
          templateUrl: '../views/trapezoid.html',
          controller: 'MainCtrl'
      })
      .state('home.gaussian', {
          url: '/gaussian',
          templateUrl: '../views/gaussian.html',
          controller: 'MainCtrl'
      })
      .state('home.bell', {
          url: '/bell',
          templateUrl: '../views/bell.html',
          controller: 'MainCtrl'
      })
      .state('home.sigmoid', {
          url: '/sigmoid',
          templateUrl: '../views/sigmoid.html',
          controller:'MainCtrl'
      });
  });
