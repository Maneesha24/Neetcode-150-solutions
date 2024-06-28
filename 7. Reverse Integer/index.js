/**
 * @author maneeshavenigalla
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the
 * value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let sign = x > 0 ? 1 : -1;

  let num = Math.abs(x);

  let reversed = 0;

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  reversed = sign * reversed;

  if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) {
    return 0;
  }

  return reversed;
};

module.exports = reverse;
