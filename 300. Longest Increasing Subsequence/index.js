/**
 * @author maneeshavenigalla
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = (nums) => {

    let dp = new Array(nums.length).fill(1);

    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                dp[i] = Math.max(1 + dp[j], dp[i])
            }
        }
    }

    return Math.max(...dp);
}

module.exports = lengthOfLIS;