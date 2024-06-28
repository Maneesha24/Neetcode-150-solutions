const MinHeap = require("../MinHeap");

/**
 * @author maneeshavenigalla
 * Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order,
 * not the kth distinct element. Implement KthLargest class:
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.minHeap = new MinHeap();

  for (const num of nums) {
    this.add(num);
  }
};

/**
 * Appends the integer val to the stream and returns the element representing the kth largest element in the stream.
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.minHeap.add(val);

  if (this.minHeap.size() > this.k) {
    this.minHeap.remove();
  }

  return this.minHeap.peek();
};

module.exports = KthLargest;
