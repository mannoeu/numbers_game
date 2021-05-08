import { SDK } from "../sdk";
import { Selectors } from "../selectors";

export const primeGame = {
  start() {
    console.log("##### É primo #####");
    const value = Selectors.inputNumber.value;
    const result = SDK.is_a_prime(value);

    return console.log(`${value} ${result ? "é primo" : "não é primo"}`);
  },
};
