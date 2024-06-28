/**
 * @author maneeshavenigalla
 * Write a function that takes the binary representation of an unsigned integer and
 * returns the number of '1' bits it has (also known as the Hamming weight).
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
  let count = 0;

  while (n != 0) {
    count++;
    n = n & (n - 1);
  }

  return count;
};

module.exports = hammingWeight;
