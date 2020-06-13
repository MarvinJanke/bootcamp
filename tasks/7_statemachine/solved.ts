export enum State {
	Idle,
	Accepting,
	Finished
}

export interface IItem {
	name: string;
	price: number;
}

// Simulates a vending machine
//
// The machine idles, until .start() is called, which allows it to accept orders.
// While the machine is accepting orders, items can be added
// Ordering can be finished when there are more than 0 items selected
//
export class VendingMachine {
	private state = State.Idle;

	private items: IItem[] = [];
	// TODO: add data as necessary

	// Returns the number of items
	numItems(): number {
		return this.items.length;
	}

	getState(): State {
		return this.state;
	}

	// Start order process, return 0 if the machine is now accepting
	// If the machine is already accepting orders or hasn't yet been
	// reset after a successful order, return 1
	start(): number {
		if (this.state === State.Idle) {
			this.state = State.Accepting;
			return 0;
		}
		return 1;
	}

	// Add item to internal buffer, if the machine accepts more items
	// If so, return the amount of items now in shopping cart
	// Otherwise, return -1
	addItem(item: IItem): number {
		if (this.state === State.Accepting) {
			this.items.push(item);
			return this.numItems();
		}
		return -1;
	}

	// Calculate the price the order would cost if it would be finished now
	// If the machine is not in accepting or finished state, return -1
	getCurrentPrice(): number {
		if (this.state === State.Idle) {
			return -1;
		}
		return this.items.reduce((sum, item) => sum + item.price, 0);
	}

	// Return the names of all items in lexicographic order
	// Returns empty array if machine is idle
	getItemNames(): string[] {
		return this.items.map((item) => item.name).sort();
	}

	// Finish the order and return the summed price of all items
	// (maybe write a helper function to do so)
	// Finishing is only allowed when there are more than 0 items selected
	// and the machine is accepting more items
	// If not, return -1
	finish(): number {
		if (this.state === State.Accepting && this.items.length) {
			this.state = State.Finished;
			return this.getCurrentPrice();
		}
		return -1;
	}

	// Resets the machine back to empty state
	reset(): void {
		this.items = [];
		this.state = State.Idle;
	}
}
