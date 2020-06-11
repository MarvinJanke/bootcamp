import test from "ava";
import { relu, leakyRelu } from "./index";

import leakyReluTests from "./leaky_relu.fixture";

for (const testCase of leakyReluTests) {
  test.serial(
    `Leaky ReLU: ${testCase[0]} -> ${testCase[1]} with a = ${
      testCase[2] || 0.1
    }`,
    (t) => {
      const result = leakyRelu(testCase[0], testCase[2]);
      const expected = testCase[1];
      t.is(Math.abs(result - expected), 0);
    }
  );
}

import reluTests from "./relu.fixture";

for (const testCase of reluTests) {
  test.serial(`ReLU: ${testCase[0]} -> ${testCase[1]}`, (t) => {
    const result = relu(testCase[0]);
    const expected = testCase[1];
    t.is(Math.abs(result - expected), 0);
  });
}
