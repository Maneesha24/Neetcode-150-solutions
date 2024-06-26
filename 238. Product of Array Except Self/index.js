/**
 * @author maneeshavenigalla
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  let result = [];
  let prod = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prod;
    prod *= nums[i];
  }

  prod = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= prod;
    prod *= nums[i];
  }

  return result;
};

module.exports = productExceptSelf;
