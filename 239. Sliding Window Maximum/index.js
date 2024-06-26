/**
 * @author maneeshavenigalla
 * You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the
 * array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
 * Return the max sliding window.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = (nums, k) => {
  let result = [];

  let deque = [];
  let i = 0;

  while (i < nums.length) {
    while (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();
    }

    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }

    i++;
  }

  return result;
};

module.exports = maxSlidingWindow;
