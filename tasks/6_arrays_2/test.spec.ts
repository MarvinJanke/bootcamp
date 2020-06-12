import test from 'ava';
import { isAdult, getPersonName, getAdultNames, getAdultNamesFunctional } from './index';

import isAdultTests from './is_adult.fixture';

for (const testCase of isAdultTests) {
	test.serial(`isAdult: ${testCase[0]} = ${testCase[1]}`, (t) => {
		const result = isAdult(testCase[0]);
		const expected = testCase[1];
		t.is(result, expected);
	});
}

import nameTests from './names.fixture';

for (const testCase of nameTests) {
	test.serial(`Get person name: ${testCase[1]}`, (t) => {
		const result = getPersonName(testCase[0]);
		const expected = testCase[1];
		t.is(result, expected);
	});
}

import people from './people.fixture';
import adultNames from './adults.fixture';

test.serial('Get adult names iteratively', (t) => {
	const len = people.length;
	const names = getAdultNames(people).sort();
	t.deepEqual(adultNames, names);
	t.is(len, people.length);
});

test.serial('Get adult names functionally', (t) => {
	const len = people.length;
	const names = getAdultNamesFunctional(people).sort();
	t.deepEqual(adultNames, names);
	t.is(len, people.length);
});
