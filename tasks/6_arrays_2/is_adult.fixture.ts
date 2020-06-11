import { IPerson } from "./index";

export default [
  [{ name: "Tarra", age: 42 }, true],
  [{ name: "Angelica", age: 18 }, true],
  [{ name: "Mikel", age: 6 }, false],
] as [IPerson, boolean][];
