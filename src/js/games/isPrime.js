import { SDK } from "../sdk";
import { Selectors } from "../selectors";
import { Injector } from "../injector";

export const primeGame = {
  response: new Injector(),

  start() {
    const value = Selectors.inputNumber.value;
    const result = SDK.is_a_prime(value);

    this.response = new Injector(
      `${value} ${result ? "é primo" : "não é primo"}`
    );

    this.response.injectDOM();
  },
};
