import { getFibonacciSequence, restOfDivision } from "../utils";

export const SDK = {
  is_a_prime(number) {
    let value = Number(number);

    if (!value) {
      return false;
    }

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
    let value = Number(number);

    if (!value) {
      return {
        error: "Value must be a number",
      };
    }

    return restOfDivision(value, 2) === 0;
  },

  is_part_of_fibonacci(number) {
    let value = Number(number);

    if (!value) {
      return false;
    }

    if (value === 0 || value == 1) {
      return true;
    }

    let find;
    for (let i = 2; i <= value; i++) {
      let valueOfPositionInFibonacci = getFibonacciSequence(i);
      find = valueOfPositionInFibonacci === value;

      if (find || valueOfPositionInFibonacci > value) {
        break;
      }
    }

    return find;
  },
  is_multiple_of_4(maxNum) {
    let value = Number(maxNum);

    if (!value) {
      return {
        error: "Value must be a number",
      };
    }

    let increment = [];

    for (let i = 2; i <= value; i++) {
      let rest = restOfDivision(i, 4);

      if (rest === 0) {
        increment.push("pin");
      } else {
        increment.push(i);
      }
    }

    return increment;
  },
};
