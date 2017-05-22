'use strict';

/**
 * @ngdoc function
 * @name janusApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the janusApp
 */
angular.module('janusApp')
  .controller('MainCtrl', function ($scope) {

  $scope.gaussianFunction = function(){
    $scope.fcn = $scope.bell.a;
    $scope.draw();
  }

  $scope.sigmoidFunction = function(){
    $scope.fcn = "x+2";
    $scope.draw();
  }
  $scope.triangleFunction = function(){
    $scope.fcn = "x+3";
    $scope.draw();
  }
  $scope.trapezoidFunction = function(){
    $scope.fcn = "x+4";
    $scope.draw();
  }

  $scope.bellFunction = function(){
    $scope.fcn = $scope.bell.a;
    $scope.draw();
  }


  $scope.draw =   function() {
      try {
        functionPlot({
          target: '#plot',
          data: [{
            fn: $scope.fcn,
            sampler: 'builtIn',  // this will make function-plot use the evaluator of math.js
            graphType: 'polyline'
          }]
        });
      }
      catch (err) {
        console.log(err);
        alert(err);
      }
    }
/*    document.getElementById('form').onsubmit = function (event) {
      event.preventDefault();
      draw();
    };*/

  });
