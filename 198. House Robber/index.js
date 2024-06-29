/**
 * @author maneeshavenigalla
 * You are a professional robber planning to rob houses along a street. Each house has a certain
 * amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent
 * houses have security systems connected and it will automatically contact the police if two adjacent
 * houses were broken into on the same night. Given an integer array nums representing the amount of money
 * of each house, return the maximum amount of money you can rob tonight without alerting the police.
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  if (nums.length == 0) {
    return 0;
  }

  if (nums.length == 1) {
    return nums[0];
  }

  let prevMax = 0;
  let currMax = 0;

  for (let i = 0; i < nums.length; i++) {
    let temp = currMax;
    currMax = Math.max(prevMax + nums[i], currMax);
    prevMax = temp;
  }

  return currMax;
};

module.exports = rob;
