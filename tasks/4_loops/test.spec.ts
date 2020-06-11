import test from "ava";
import { sum, max } from "./index";

import sumTests from "./sum.fixture";

for (const testCase of sumTests) {
  test.serial("Test sum iterative", (t) => {
    const arr = testCase[0];
    const len = arr.length;
    const result = sum(arr);
    const expected = testCase[1];
    t.is(arr.length, len);
    t.is(result, expected);
  });
}

import maxTests from "./max.fixture";

for (const testCase of maxTests) {
  test.serial("Test max iterative", (t) => {
    const arr = testCase[0];
    const len = arr.length;
    const result = max(arr);
    const expected = testCase[1];
    t.is(arr.length, len);
    t.is(result, expected);
  });
}
