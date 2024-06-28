/**
 * @author maneeshavenigalla
 * Given an array nums containing n distinct numbers in the range [0, n], return the only
 * number in the range that is missing from the array.
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  const n = nums.length;

  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((prev, sum) => sum + prev, 0);

  return expectedSum - actualSum;
};

module.exports = missingNumber;
