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

  $scope.allFunctions = function(){
    var c = $scope.gaussiana.c;
    var sigma = $scope.gaussiana.sig;
    //$scope.fcnGaussiana = e+"^(-1/2*((x-"+c+")/"+sigma+")^2)"
    $scope.fcnGaussiana = "";


    var a = $scope.sigmoid.a;
    var b = $scope.sigmoid.b;
    $scope.fcnSigmoid = "1/(1+"+e+"^(-"+a+"*(x-"+b+")))"


    var a = $scope.trapezoid.a;
    var b = $scope.trapezoid.b;
    var c = $scope.trapezoid.c;
    var d = $scope.trapezoid.d;
    $scope.fcnTrapezoidZero = "0";
    $scope.fcnTrapezoidBetweenAandB = "(x-"+a+")/("+b+"-"+a+")";
    $scope.fcnTrapezoidBetweenBandC = "1";
    $scope.fcnTrapezoidBetweenCandD = "("+d+"-x)/("+d+"-"+c+")";

    var a = $scope.triangle.a;
    var b = $scope.triangle.b;
    var c = $scope.triangle.c;
    $scope.fcnTriangleZero = "0";
    $scope.fcnTriangleBetweenAandB = "(x-"+a+")/("+b+"-"+a+")";
    $scope.fcnTriangleBetweenBandC = "("+c+"-x)/("+c+"-"+b+")";


    var a = $scope.bell.a;
    var b = $scope.bell.b;
    var c = $scope.bell.c;
    $scope.fcnBell = "1/(1+((x-"+c+")/"+a+")^(2*"+b+"))";


    $scope.draw();
  }
  $scope.draw =   function() {
      try {
        functionPlot({
          target: '#plot',
          title:'Gráfica',
          data: [
            {
            title:'gráfica gaussiana',
            range: [-1000,1000],
            fn: $scope.fcnGaussiana,
            sampler: 'builtIn',  // this will make function-plot use the evaluator of math.js
            graphType: 'polyline'
          },
          {
            title:'gráfica sigmoid',
            range: [-1000,1000],
            fn:$scope.fcnSigmoid,
            graphType:'polyline'
          },
          {
            title: 'gráfica bell',
            range: [-1000,1000],
            fn: $scope.fcnBell,
            graphType:'polyline'
          },
          {
            title: 'trapezoid',
            color: 'black',
            range: [0,$scope.trapezoid.a],
            fn: $scope.fcnTrapezoidZero,
            graphType:'polyline'
          }
          ,
          {
            title: 'trapezoid',
            color: 'black',
            range: [$scope.trapezoid.a , $scope.trapezoid.b],
            fn: $scope.fcnTrapezoidBetweenAandB,
            graphType:'polyline'
          },
          {
            title: 'trapezoid',
            color: 'black',
            range: [$scope.trapezoid.b,$scope.trapezoid.c],
            fn: $scope.fcnTrapezoidBetweenBandC,
            graphType:'polyline'
          },
          {
            title: 'trapezoid',
            color: 'black',
            range: [$scope.trapezoid.c,$scope.trapezoid.d],
            fn: $scope.fcnTrapezoidBetweenCandD,
            graphType:'polyline'
          },
          {
            title: 'trapezoid',
            color: 'black',
            range: [$scope.trapezoid.d,20],
            fn: $scope.fcnTrapezoidZero,
            graphType:'polyline'
          },
          {
            title: 'triangle',
            color: 'purple',
            range: [0,$scope.triangle.a],
            fn: $scope.fcnTriangleZero,
            graphType:'polyline'
          },
          {
            title: 'triangle',
            color: 'purple',
            range: [$scope.triangle.a,$scope.triangle.b],
            fn: $scope.fcnTriangleBetweenAandB,
            graphType:'polyline'
          },
          {
            title: 'triangle',
            color: 'purple',
            range: [$scope.triangle.b,$scope.triangle.c],
            fn: $scope.fcnTriangleBetweenBandC,
            graphType:'polyline'
          }
          ,
          {
            title: 'triangle',
            color: 'purple',
            range: [$scope.triangle.c,1000],
            fn: $scope.fcnTriangleZero,
            graphType:'polyline'
          }
        ]
        });
      }
      catch (err) {
        console.log(err);
        alert(err);
      }
    }

  });
