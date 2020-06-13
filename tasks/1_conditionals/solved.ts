// Execute the leaky reLU function
// Returns x if x > 0
// Returns x times a otherwise
export function leakyRelu(x: number, a = 0.1): number {
	if (x > 0) return x;
	return a * x;
}

// Execute the reLU function
// Returns x if x > 0
// Returns 0 otherwise
export function relu(x: number): number {
	return leakyRelu(x, 0);
}

// More info
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

// Visualisation
// https://www.codeproject.com/KB/AI/1220276/ReLU.png
