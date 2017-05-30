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
  var e  = 2.7182818284;
  $scope.gaussianFunction = function(){
    var c = $scope.gaussiana.c;
    var sigma = $scope.gaussiana.sig;
    $scope.fcn = e+"^(-1/2*((x-"+c+")/"+sigma+")^2)"
    $scope.draw();
  }

  $scope.sigmoidFunction = function(){
    var a = $scope.sigmoid.a;
    var b = $scope.sigmoid.b;
    $scope.fcn = "1/(1+"+e+"^(-"+a+"*(x-"+b+")))"
    $scope.draw();
  }
  $scope.triangleFunction = function(){
    $scope.draw();
  }
  $scope.trapezoidFunction = function(){
    $scope.fcn = "x+4";
    $scope.draw();
  }

  $scope.bellFunction = function(){
    var a = $scope.bell.a;
    var b = $scope.bell.b;
    var c = $scope.bell.c;
    $scope.fcn = "1/(1+((x-"+c+")/"+a+")^(2*"+b+"))";
    $scope.draw();
  }


  $scope.draw =   function() {
      try {
        functionPlot({
          target: '#plot',
          title:'Gráfica',
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
