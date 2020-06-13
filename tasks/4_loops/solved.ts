// Algorithms with iterative approach
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

// Returns the sum of all numbers
export function sum(numbers: number[]): number {
	let sum = 0;
	for (const num of numbers) {
		sum += num;
	}
	return sum;
}

// Returns the highest number
export function max(numbers: number[]): number {
	if (!numbers.length) throw new Error('Array length < 1'); // Keep this

	let max = numbers[0];
	for (const num of numbers) {
		if (num > max) {
			max = num;
		}
	}
	return max;
}
