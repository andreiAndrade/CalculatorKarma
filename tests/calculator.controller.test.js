describe('calculator', function () {
	beforeEach(module('calculatorApp'));

	var $scope ;
	var controller;

	beforeEach(inject(function(_$controller_){
		$scope = {};
		controller = _$controller_('CalculatorController', { $scope: $scope});
	}));

	describe('sum', function(){
		it('1 + 1 should equal 2', function() {
			$scope.x = 1;
			$scope.y = 1;
			$scope.sum();
			expect($scope.z).toBe(2);
		});
	});

	describe('sub', function(){
		it('4 - 2 should equal 2', function(){
			$scope.x = 4;
			$scope.y = 2;
			$scope.sub();
			expect($scope.z).toBe(2)
		});
	});

	describe('mult', function(){
		it('2 * 2 should equal 4', function(){
			$scope.x = 2;
			$scope.y = 2;
			$scope.mult();
			expect($scope.z).toBe(4);
		})
	});

	describe('div', function(){
		it('2 / 2 should equal 1', function(){
			$scope.x = 2;
			$scope.y = 2;
			$scope.div();
			expect($scope.z).toBe(1); 
		});

		it("2 / 0 should equal 'Nenhum número pode ser dividido por 0'", function(){
			$scope.x = 2;
			$scope.y = 0;
			$scope.div();
			expect($scope.z).toBe('Nenhum número pode ser dividido por 0'); 
		});
	});
})