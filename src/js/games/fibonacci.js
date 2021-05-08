import { SDK } from "../sdk";
import { Selectors } from "../selectors";

export const fibonacciGame = {
  start() {
    console.log("##### Fibonacci #####");
    const value = Selectors.inputNumber.value;
    const result = SDK.is_part_of_fibonacci(value);

    return console.log(
      `${value} ${
        result
          ? "faz parte da sequência fibonacci"
          : "não faz parte da sequência fibonacci"
      }`
    );
  },
};
