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
    var atra = 0;
    var btra = 0;
    var ctra = 0;
    var dtra = 0;
    var atri = 0;
    var btri = 0;
    var ctri = 0;

    if($scope.gaussiana == undefined ){
      $scope.fcnGaussiana = "";
    }
    else {
       $scope.fcnGaussiana = e+"^(-1/2*((x-"+$scope.gaussiana.c+")/"+$scope.gaussiana.sig+")^2)";
    }

    if($scope.sigmoid==undefined){
      $scope.fcnSigmoid = "";
    }else{
        $scope.fcnSigmoid = "1/(1+"+e+"^(-"+$scope.sigmoid.a+"*(x-"+$scope.sigmoid.b+")))"
    }


    if($scope.trapezoid==undefined){
      $scope.fcnTrapezoidZero = "";
      $scope.fcnTrapezoidBetweenAandB = "";
      $scope.fcnTrapezoidBetweenBandC = "";
      $scope.fcnTrapezoidBetweenCandD = "";
    }else{
      $scope.fcnTrapezoidZero = "0";
      $scope.fcnTrapezoidBetweenAandB = "(x-"+$scope.trapezoid.a+")/("+$scope.trapezoid.b+"-"+$scope.trapezoid.a+")";
      $scope.fcnTrapezoidBetweenBandC = "1";
      $scope.fcnTrapezoidBetweenCandD = "("+$scope.trapezoid.d+"-x)/("+$scope.trapezoid.d+"-"+$scope.trapezoid.c+")";
      atra = $scope.trapezoid.a;
      btra = $scope.trapezoid.b;
      ctra = $scope.trapezoid.c;
      dtra = $scope.trapezoid.d;
    }

    if($scope.triangle == undefined ){
      $scope.fcnTriangleZero = "0";
      $scope.fcnTriangleBetweenAandB = "";
      $scope.fcnTriangleBetweenBandC = "";
    }else{

      $scope.fcnTriangleZero = "0";
      $scope.fcnTriangleBetweenAandB = "(x-"+$scope.triangle.a+")/("+$scope.triangle.b+"-"+$scope.triangle.a+")";
      $scope.fcnTriangleBetweenBandC = "("+$scope.triangle.c+"-x)/("+$scope.triangle.c+"-"+$scope.triangle.b+")";
      atri = $scope.triangle.a;
      btri = $scope.triangle.b;
      ctri = $scope.triangle.c;
    }

    if($scope.bell == undefined ){
        $scope.fcnBell = "";
    }else{
      $scope.fcnBell = "1/(1+((x-"+$scope.bell.c+")/"+$scope.bell.a+")^(2*"+$scope.bell.b+"))";
    }


    $scope.draw(atra,btra,ctra,dtra,atri,btri,ctri);
  }
  $scope.draw =   function(atra,btra,ctra,dtra,atri,btri,ctri) {
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
            range: [0,atra],
            fn: $scope.fcnTrapezoidZero,
            graphType:'polyline'
          }
          ,
          {
            title: 'trapezoid',
            color: 'black',
            range: [atra , btra],
            fn: $scope.fcnTrapezoidBetweenAandB,
            graphType:'polyline'
          },
          {
            title: 'trapezoid',
            color: 'black',
            range: [btra,ctra],
            fn: $scope.fcnTrapezoidBetweenBandC,
            graphType:'polyline'
          },
          {
            title: 'trapezoid',
            color: 'black',
            range: [ctra,dtra],
            fn: $scope.fcnTrapezoidBetweenCandD,
            graphType:'polyline'
          },
          {
            title: 'trapezoid',
            color: 'black',
            range: [dtra,20],
            fn: $scope.fcnTrapezoidZero,
            graphType:'polyline'
          },
          {
            title: 'triangle',
            color: 'purple',
            range: [0,atri],
            fn: $scope.fcnTriangleZero,
            graphType:'polyline'
          },
          {
            title: 'triangle',
            color: 'purple',
            range: [atri,btri],
            fn: $scope.fcnTriangleBetweenAandB,
            graphType:'polyline'
          },
          {
            title: 'triangle',
            color: 'purple',
            range: [btri,ctri],
            fn: $scope.fcnTriangleBetweenBandC,
            graphType:'polyline'
          }
          ,
          {
            title: 'triangle',
            color: 'purple',
            range: [ctri,1000],
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
