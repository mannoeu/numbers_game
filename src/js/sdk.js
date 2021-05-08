import { getFibonacciSequence } from "../utils";

export const SDK = {
  is_a_prime(number) {
    let value = Number(number);

    if (value === 0 || value == 1) {
      return true;
    }
    for (let i = 2; i < value; i++)
      if (value % i === 0) {
        return false;
      }
    return value > 1;
  },
  is_an_even_or_odd(number) {
    return Number(number) % 2 === 0;
  },
  is_part_of_fibonacci(number) {
    let value = Number(number);

    if (value <= 1) {
      return 1;
    }

    let find;
    for (let i = 2; i <= value; i++) {
      find = getFibonacciSequence(i) === value;

      if (find) {
        break;
      }
    }

    return find;
  },
};
