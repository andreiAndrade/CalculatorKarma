angular.module('calculatorApp', []).controller('CalculatorController', function CalculatorController($scope) {
  
  $scope.z = undefined;

  $scope.sum = function() {
    var sum = ($scope.x + $scope.y);

    $scope.z = (sum % 2 == 0) ? 'pair' : 'odd';
  };
});