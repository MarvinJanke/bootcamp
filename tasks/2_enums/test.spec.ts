import test from "ava";
import { TempControl, control } from "./index";
import climateControlTests from "./climate.fixture";

const stateName = (state: TempControl) => {
  return {
    [TempControl.Cooling]: "Cooling",
    [TempControl.Idle]: "Idle",
    [TempControl.Heating]: "Heating",
  }[state];
};

for (const testCase of climateControlTests) {
  test.serial(
    `Climate control: ${testCase[0]} -> ${stateName(testCase[1])}`,
    (t) => {
      const result = control(testCase[0]);
      const expected = testCase[1];
      t.is(stateName(result), stateName(expected));
    }
  );
}
