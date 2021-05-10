import { evenOrOddGame } from "./evenOrOdd";
import { primeGame } from "./isPrime";
import { fibonacciGame } from "./fibonacci";
import { multipleGame } from "./multiple";

export const Games = {
  evenOrOdd() {
    return evenOrOddGame.start();
  },
  prime() {
    return primeGame.start();
  },
  fibonacci() {
    return fibonacciGame.start();
  },
  multipleOf4() {
    return multipleGame.start();
  },

  run(key) {
    return Games[key]();
  },
};
