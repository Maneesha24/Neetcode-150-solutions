/**
 * @author maneeshavenigalla
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(currentSum + nums[i], nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

module.exports = maxSubArray;