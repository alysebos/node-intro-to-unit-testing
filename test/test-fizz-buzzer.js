// import the file being tested
const fizzBuzzer = require('../fizzBuzzer');
// import chai expect
const expect = require('chai').expect;

// start the describe statement
describe('fizzBuzzer', function () {
	// indicate behavior being tested and see if it works
	it('should return fizz if number is divisible by three, buzz if divisible by 5, and fizz-buzz if divisible by both', function () {
		//set up normal inpputs
		const normalCases = [
			[3, 'fizz'],
			[6, 'fizz'],
			[9, 'fizz'],
			[12, 'fizz'],
			[5, 'buzz'],
			[10, 'buzz'],
			[20, 'buzz'],
			[25, 'buzz'],
			[15, 'fizz-buzz'],
			[30, 'fizz-buzz'],
			[45, 'fizz-buzz'],
			[60, 'fizz-buzz'],
			[7, 7]
		];
		// check if it is providing the expected behavior by looping through inputs being tested
		normalCases.forEach(function (input) {
			const answer = fizzBuzzer(input[0]);
			expect(answer).to.equal(input[1]);
		});
	});

	// indicate edge cases
	it('should throw an error if the input is not a number', function () {
		//set up bad inputs
		const badInputs = [true, "dogs", {a: 34}];
		// check if it is behaving as expected by looping through the inputs
		badInputs.forEach(function (input) {
			expect(function () {fizzBuzzer(input)}).to.throw(Error);
		});
	});
});