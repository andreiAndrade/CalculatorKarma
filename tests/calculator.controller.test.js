describe('calculator', function () {
	beforeEach(module('calculatorApp'));

	var $controller;

	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));

	describe('sum', function(){

		var $scope ;
		var controller;
		
		beforeEach(inject(function(){
			$scope = {};
			controller = $controller('CalculatorController', { $scope: $scope});
		}));

		it('1+1 should equal pair', function() {
			$scope.x = 1;
			$scope.y = 1;
			$scope.sum();
			expect($scope.z).toBe('pair');
		});

		it('z should have default value of undefined', function () {
			expect($scope.z).toBe(undefined);
		});

		it('1+2 should equal odd', function(){
			$scope.x = 1;
			$scope.y = 2;
			$scope.sum();
			expect($scope.z).toBe('odd');
		});
	});
})