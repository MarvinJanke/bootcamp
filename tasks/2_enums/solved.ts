// Simulate a climate control
// It should cool down, when temperature is above 29°
// It should heat up, when temperature is below 15°
// Otherwise it should do nothing

// Possible actions enumerator
// https://www.typescriptlang.org/docs/handbook/enums.html
export enum TempControl {
	Cooling = -1,
	Idle,
	Heating
}

enum TempThreshold {
	Cold = 15,
	Hot = 29
}

// Return what the climate control should be doing
// depending on the input temperature
export function control(temperature: number): TempControl {
	if (temperature > TempThreshold.Hot) {
		return TempControl.Cooling;
	} else if (temperature < TempThreshold.Cold) {
		return TempControl.Heating;
	}
	return TempControl.Idle;
}
