/**
 * @author maneeshavenigalla
 * Write an algorithm to determine if a number n is happy.
 * A happy number is a number defined by the following process:
 * Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy.
 * Return true if n is a happy number, and false if not.
 * @param {number} n - a positive integer
 * @return {number}
 */
const isHappy = (n) => {
  let seen = new Set();

  while (!seen.has(n) || n !== 1) {
    n = getSquaredNum(n);

    if (seen.has(n)) {
      return false;
    }

    seen.add(n);
  }

  return n == 1;
};

const getSquaredNum = (num) => {
  let result = 0;

  while (num > 0) {
    let digit = num % 10;
    result += digit * digit;
    num = Math.floor(num / 10);
  }

  return result;
};

module.exports = isHappy;
