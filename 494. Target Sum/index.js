/**
 * @author maneeshavenigalla
 * You are given an integer array nums and an integer target. You want to build an expression out of nums by adding one of the symbols '+' and '-' 
 * before each integer in nums and then concatenate all the integers. For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 
 * and concatenate them to build the expression "+2-1".Return the number of different expressions that you can build, which evaluates to target. 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays = (nums, target) => {

    const dp = {};

    const dfs = (i, sum) => {
        if (i === nums.length) {
            return sum === target ? 1 : 0;
        }

        const key = `${i}-${sum}`;
        if (key in dp) {
            return dp[key];
        }

        const ways = dfs(i + 1, sum + nums[i]) + dfs(i + 1, sum - nums[i]);

        dp[key] = ways;
        return ways;

    }

    return dfs(0, 0);

};

module.exports = findTargetSumWays;