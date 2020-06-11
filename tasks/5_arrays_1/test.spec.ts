import test from "ava";
import { sumFunctional, maxFunctional } from "./index";

import sumTests from "../4_loops/sum.fixture";

for (const testCase of sumTests) {
  test.serial("Test sum functional", (t) => {
    const arr = testCase[0];
    const len = arr.length;
    const result = sumFunctional(arr);
    const expected = testCase[1];
    t.is(arr.length, len);
    t.is(result, expected);
  });
}

import maxTests from "../4_loops/max.fixture";

for (const testCase of maxTests) {
  test.serial("Test max functional", (t) => {
    const arr = testCase[0];
    const len = arr.length;
    const result = maxFunctional(arr);
    const expected = testCase[1];
    t.is(arr.length, len);
    t.is(result, expected);
  });
}
