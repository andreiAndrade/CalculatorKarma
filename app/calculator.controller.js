angular.module('calculatorApp', []).controller('CalculatorController', function CalculatorController($scope) {
  
  $scope.z = 0;

  $scope.sum = function() {
    $scope.z = ($scope.x + $scope.y);
  };

  $scope.sub = function() {
  	$scope.z = ($scope.x - $scope.y);
  }

  $scope.mult = function() {
  	$scope.z = ($scope.x * $scope.y);
  }

  $scope.div = function() {
  	$scope.z = ($scope.x / $scope.y);
  	$scope.z = $scope.z == Infinity ? 'Nenhum número pode ser dividido por 0' : $scope.z;
  }
});