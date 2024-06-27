/**
 * @author maneeshavenigalla
 * Given an integer array nums of unique elements, return all possible subsets (the power set). The
 * solution set must not contain duplicate subsets. Return the solution in any order.
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
  let result = [];

  let set = [];

  const dfs = (i) => {
    if (i >= nums.length) {
      result.push([...set]);
      return result;
    }

    set.push(nums[i]);
    dfs(i + 1);
    set.pop();
    dfs(i + 1);
  };

  dfs(0);

  return result;
};

module.exports = subsets;
