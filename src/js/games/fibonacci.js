import { SDK } from "../sdk";
import { Selectors } from "../selectors";
import { Injector } from "../injector";

export const fibonacciGame = {
  response: new Injector(),

  start() {
    const value = Selectors.inputNumber.value;
    const result = SDK.is_part_of_fibonacci(value);

    this.response.setMessage(
      `${value} ${
        result
          ? "faz parte da sequência fibonacci"
          : "não faz parte da sequência fibonacci"
      }`
    );

    this.response.injectDOM();
  },
};
