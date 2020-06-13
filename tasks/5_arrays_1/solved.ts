// Algorithms with functional approach
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

function add(a: number, b: number) {
	return a + b;
}

// Returns the sum of all numbers
export function sumFunctional(numbers: number[]): number {
	return numbers.reduce(add, 0);
}

function max(a: number, b: number) {
	return a > b ? a : b;
}

// Returns the highest number
export function maxFunctional(numbers: number[]): number {
	if (!numbers.length) throw new Error('Array length < 1'); // Keep this
	return numbers.reduce(max, 0);
}
