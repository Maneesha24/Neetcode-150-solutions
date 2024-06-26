/**
 * @author maneeshavenigalla
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numObj = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (complement in numObj) {
      return [numObj[complement], i];
    } else {
      numObj[nums[i]] = i;
    }
  }
};

module.exports = twoSum;
