/**
 * @author maneeshavenigalla
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
 * The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  if (digits[0] === 0) {
    digits.unshift(1);
  }

  return digits;
};

module.exports = plusOne;
