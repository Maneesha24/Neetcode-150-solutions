/**
 * @author maneeshavenigalla
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let numSet = new Set([...nums]);

  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!numSet.has(nums[i] - 1)) {
      let currentLongest = 1;
      let currentNum = nums[i];

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLongest++;
      }

      longest = Math.max(longest, currentLongest);
    }
  }

  return longest;
};

module.exports = longestConsecutive;
