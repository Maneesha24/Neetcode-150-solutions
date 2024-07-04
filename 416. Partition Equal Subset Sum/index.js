/**
 * @author maneeshavenigalla
 * Given an integer array nums, return true if you can partition the array into two 
 * subsets such that the sum of the elements in both subsets is equal or false otherwise.
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = (nums) => {
    let sum = nums.reduce((prev, curr) => prev + curr, 0);

    if (sum % 2 != 0) {
        return false;
    }

    let dp = new Set();
    dp.add(0);

    const target = sum / 2;
    for (let i = nums.length - 1; i >= 0; i--) {
        let nextDp = new Set();

        for (const num of dp) {
            if (nums[i] + num === target) {
                return true;
            }

            nextDp.add(num + nums[i]);
            nextDp.add(num);
        }

        dp = nextDp;
    }

    return false;

};

module.exports = canPartition;