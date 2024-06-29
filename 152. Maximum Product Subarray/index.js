/**
 * @author maneeshavenigalla
 * Given an integer array nums, find a subarray that has the largest product, and return the product.
 * The test cases are generated so that the answer will fit in a 32-bit integer.
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
  let result = nums[0];
  let minProduct = nums[0];
  let maxProduct = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [minProduct, maxProduct] = [maxProduct, minProduct];
    }

    minProduct = Math.min(minProduct * nums[i], nums[i]);
    maxProduct = Math.max(maxProduct * nums[i], nums[i]);

    result = Math.max(result, maxProduct);
  }

  return result;
};

module.exports = maxProduct;
