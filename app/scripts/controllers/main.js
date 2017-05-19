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

  $scope.prueba = function(){alert("tin tin")};
  $scope.draw =   function() {
    alert("la buena");
      try {
        functionPlot({
          target: '#plot',
          data: [{
            fn: document.getElementById('eq').value,
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

    document.getElementById('form').onsubmit = function (event) {
      event.preventDefault();
      draw();
    };

    //draw();
  });
