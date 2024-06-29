/**
 * @author maneeshavenigalla
 * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
 * ans[i] is the number of 1's in the binary representation of i.
 * @param {number} n
 * @return {number[]}
 */
const countBits = (n) => {
  let result = new Array(n + 1).fill(0);

  let i = 1;

  while (i <= n) {
    result[i] = 1 + result[i & (i - 1)];
    i++;
  }

  return result;
};

module.exports = countBits;
