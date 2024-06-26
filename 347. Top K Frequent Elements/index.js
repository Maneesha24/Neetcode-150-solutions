/**
 * @author maneeshavenigalla
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let numObj = {};

  for (const num of nums) {
    if (num in numObj) {
      numObj[num] += 1;
    } else {
      numObj[num] = 1;
    }
  }

  let bucketFreq = Array.from({ length: nums.length + 1 }, () => []);
  let keys = Object.keys(numObj);

  let result = [];

  for (const char of keys) {
    const index = numObj[char];
    bucketFreq[index].push(char);
  }

  for (let i = bucketFreq.length - 1; i >= 0; i--) {
    for (let j = 0; j < bucketFreq[i].length; j++) {
      result.push(parseInt(bucketFreq[i][j]));

      if (result.length === k) {
        return result;
      }
    }
  }

  return result;
};

module.exports = topKFrequent;
