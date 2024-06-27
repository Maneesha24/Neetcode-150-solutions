/**
 * @author maneeshavenigalla
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations
 * of candidates where the chosen numbers sum to target. You may return the combinations in any order.The same number may
 * be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of
 * the chosen numbers is different. The test cases are generated such that the number of unique combinations that sum
 * up to target is less than 150 combinations for the given input.
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  let result = [];
  const combo = [];

  const dfs = (idx, sum) => {
    if (idx >= candidates.length || sum > target) {
      return;
    }

    if (sum === target) {
      result.push([...combo]);
      return result;
    }

    for (let i = idx; i < candidates.length; i++) {
      combo.push(candidates[i]);
      dfs(i, sum + candidates[i]);
      combo.pop();
    }
  };

  dfs(0, 0);
  return result;
};

module.exports = combinationSum;
