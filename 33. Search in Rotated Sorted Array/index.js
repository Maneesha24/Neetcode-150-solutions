/**
 * @author maneeshavenigalla
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
 * You must write an algorithm with O(log n) runtime complexity.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] >= nums[right]) {
      if (nums[mid] >= nums[right] && target < nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (nums[mid] >= nums[left] && nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return nums[left] === target ? left : -1;
};

module.exports = search;
