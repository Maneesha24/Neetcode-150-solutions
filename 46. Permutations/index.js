/**
 * @author maneeshavenigalla
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  if (nums.length === 1) {
    return [[nums[0]]];
  }

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let remaining = nums.slice(0, i).concat(nums.slice(i + 1));
    let permutedRemaining = permute(remaining);

    for (let j = 0; j < permutedRemaining.length; j++) {
      let finalPermutedRemaining = [current, ...permutedRemaining[j]];
      result.push(finalPermutedRemaining);
    }
  }

  return result;
};

module.exports = permute;
