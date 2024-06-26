/**
 * @author maneeshavenigalla
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let numSet = new Set([...nums]);

  return numSet.size !== nums.length;
};

module.exports = containsDuplicate;
