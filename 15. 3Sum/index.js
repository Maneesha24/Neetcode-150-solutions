/**
 * @author maneeshavenigalla
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that
 * i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    while (j < k) {
      let currentSum = nums[i] + nums[j] + nums[k];

      if (currentSum == 0) {
        result.push([nums[i], nums[j], nums[k]]);

        while (j < nums.length && nums[j] == nums[j + 1]) {
          j++;
        }

        while (k > 0 && nums[k] == nums[k - 1]) {
          k--;
        }

        j++;
        k--;
      } else if (currentSum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

  return result;
};

module.exports = threeSum;
