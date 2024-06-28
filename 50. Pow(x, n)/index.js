/**
 * @author maneeshavenigalla
 * Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  if (n === 0) {
    return 1;
  }

  let base = x;
  let exponent = Math.abs(n);

  let result = 1;

  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result *= base;
    }

    base *= base;
    exponent = Math.floor(exponent / 2);
  }

  return n < 0 ? 1 / result : result;
};

module.exports = myPow;
