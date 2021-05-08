import { evenOrOddGame } from "./games/evenOrOdd";
import { primeGame } from "./games/isPrime";
import { fibonacciGame } from "./games/fibonacci";

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

  run(key) {
    return Games[key]();
  },
};
