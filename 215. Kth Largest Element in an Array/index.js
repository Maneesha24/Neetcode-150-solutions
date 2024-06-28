const MaxHeap = require("../MaxHeap");

/**
 * @author maneeshavenigalla
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  const heap = new MaxHeap();
  for (const num of nums) {
    heap.add(num);
  }

  while (k > 1) {
    heap.remove();
    k--;
  }

  return heap.peek();
};

module.exports = findKthLargest;
