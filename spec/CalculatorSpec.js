describe('Calculator specifications', function () {

	it('should calculate 1+1', function () {
		var calculator = new Calculator();
		expect(calculator.add(1, 1)).toEqual(2);
	});
});