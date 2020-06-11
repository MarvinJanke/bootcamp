// Simulate a climate control
// It should cool down, when temperature is above 29°
// It should heat up, when temperature is below 15°
// Otherwise it should do nothing

// Possible actions enumerator
// https://www.typescriptlang.org/docs/handbook/enums.html
export enum TempControl {
  Cooling = -1,
  Idle,
  Heating,
}

// Return what the climate control should be doing
// depending on the input temperature
export function control(temperature: number): TempControl {
  // TODO: implement
  // Do NOT use any literal numbers in this function
  return TempControl.Idle;
}
