const MaxHeap = require("../MaxHeap");
const MinHeap = require("../MinHeap");

/**
 * @author maneeshavenigalla
 * The median is the middle value in an ordered integer list. If the size of the list is even,
 * there is no middle value, and the median is the mean of the two middle values.
 */
var MedianFinder = function () {
  this.minHeap = new MinHeap();
  this.maxHeap = new MaxHeap();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.maxHeap.size() === 0 || num < this.maxHeap.peek()) {
    this.maxHeap.add(num);
  } else {
    this.minHeap.add(num);
  }

  if (this.maxHeap.size() + 1 === this.minHeap.size()) {
    this.maxHeap.add(this.minHeap.remove());
  } else if (this.maxHeap.size() === this.minHeap.size() + 1) {
    this.minHeap.add(this.maxHeap.remove());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.minHeap.size() < this.maxHeap.size()) {
    return this.maxHeap.peek();
  } else {
    return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
module.exports = MedianFinder;
