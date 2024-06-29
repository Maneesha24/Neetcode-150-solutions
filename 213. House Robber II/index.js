/**
 * @author maneeshavenigalla
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed.
 * All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile,
 * adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses
 * were broken into on the same night. Given an integer array nums representing the amount of money of each house, return
 * the maximum amount of money you can rob tonight without alerting the police.
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  let n = nums.length;

  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return nums[0];
  }

  const startRobbing = (start, end) => {
    let prevMax = 0;
    let currMax = 0;

    for (let i = start; i <= end; i++) {
      let temp = currMax;
      currMax = Math.max(currMax, prevMax + nums[i]);
      prevMax = temp;
    }

    return currMax;
  };

  return Math.max(startRobbing(0, n - 2), startRobbing(1, n - 1));
};

module.exports = rob;
