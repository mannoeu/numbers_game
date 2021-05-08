import { SDK } from "../sdk";
import { Selectors } from "../selectors";

export const evenOrOddGame = {
  start() {
    console.log("##### Par ou ímpar #####");
    const value = Selectors.inputNumber.value;
    const result = SDK.is_an_even_or_odd(value);

    return console.log(`${value} é ${result ? "par" : "ímpar"}`);
  },
};
