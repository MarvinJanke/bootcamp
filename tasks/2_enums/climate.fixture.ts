import { TempControl } from "./index";

export default [
  [-5, TempControl.Heating],
  [0, TempControl.Heating],
  [10.5, TempControl.Heating],
  [14.99, TempControl.Heating],
  [15, TempControl.Idle],
  [20, TempControl.Idle],
  [25, TempControl.Idle],
  [29.99, TempControl.Cooling],
  [30, TempControl.Cooling],
  [32, TempControl.Cooling],
  [36.5, TempControl.Cooling],
] as [number, TempControl][];
