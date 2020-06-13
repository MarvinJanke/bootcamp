export class BaseCounter {
	protected value = 0;

	// Increment inner value and return new value
	increment(): number {
		return ++this.value;
	}

	// Resets the counter to 0
	reset(): void {
		this.value = 0;
	}

	getValue(): number {
		return this.value;
	}
}

export class LimitedCounter extends BaseCounter {
	private limit = 0;

	constructor(limit: number) {
		super();
		this.limit = limit;
	}

	// Increment inner value, but do not increment past the limit
	// Return new value
	increment(): number {
		if (this.value < this.limit) {
			super.increment();
		}
		return this.value;
	}
}

// More info
// https://www.w3schools.com/js/js_classes.asp
// https://www.w3schools.com/jsref/jsref_class_super.asp
