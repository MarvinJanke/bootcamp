// https://www.typescriptlang.org/docs/handbook/interfaces.html
export interface IPerson {
  name: string;
  age: number;
}

// Returns true if the person is at least 18 years old
export function isAdult(person: IPerson): boolean {
  // TODO: implement
  return false;
}

export function getPersonName(person: IPerson): string {
  // TODO: get name of person
  return "";
}

export function getAdultNames(persons: IPerson[]): string[] {
  // TODO: get names of all adults iteratively (using for-loop(s))
  return [];
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
export function getAdultNamesFunctional(persons: IPerson[]): string[] {
  // TODO: get names of all adults functionally (without using for-loop(s))
  return [];
}
