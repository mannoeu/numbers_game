import { SDK } from "../sdk";
import { Selectors } from "../selectors";
import { Injector } from "../injector";

export const evenOrOddGame = {
  response: new Injector(),

  start() {
    const value = Selectors.inputNumber.value;
    const result = SDK.is_an_even_or_odd(value);

    if (
      typeof result === "object" &&
      result?.error === "Value must be a number"
    ) {
      this.response.setMessage(`${value} não ímpar nem par.`);
    } else {
      this.response.setMessage(`${value} é ${result ? "par" : "ímpar"}`);
    }

    this.response.injectDOM();
  },
};
