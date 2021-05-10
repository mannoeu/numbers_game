import { SDK } from "../sdk";
import { Selectors } from "../selectors";
import { Injector } from "../injector";

export const multipleGame = {
  response: new Injector(),

  start() {
    const value = Selectors.inputNumber.value;
    const result = SDK.is_multiple_of_4(value);

    if (
      typeof result === "object" &&
      result?.error === "Value must be a number"
    ) {
      this.response.setMessage(
        `${value} não pode ser lido para múltiplo de 4.`
      );
    } else {
      this.response.setMessage(
        result?.length
          ? result?.join(", ")
          : "Ops, sem múltiplos de PIN, digo, 4..."
      );
    }

    this.response.injectDOM();
  },
};
