// https://www.typescriptlang.org/docs/handbook/interfaces.html
export interface IPerson {
	name: string;
	age: number;
}

const ADULT_AGE = 18;

// Returns true if the person is at least 18 years old
export function isAdult(person: IPerson): boolean {
	return person.age >= ADULT_AGE;
}

export function getPersonName(person: IPerson): string {
	return person.name;
}

export function getAdultNames(persons: IPerson[]): string[] {
	const names: string[] = [];
	for (const person of persons) {
		if (isAdult(person)) {
			names.push(getPersonName(person));
		}
	}
	return names;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
export function getAdultNamesFunctional(persons: IPerson[]): string[] {
	return persons.filter(isAdult).map(getPersonName);
}
