const MaxHeap = require("../MaxHeap");

/**
 * @author maneeshavenigalla
 * Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).
 * The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2). You may return the answer in any order. The
 * answer is guaranteed to be unique (except for the order that it is in).
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = (points, k) => {
  let maxHeap = new MaxHeap();
  let result = [];

  for (const point of points) {
    let distance = Math.sqrt(point[0] * point[0] + point[1] * point[1]);
    maxHeap.add([distance, point]);

    if (maxHeap.size() > k) {
      maxHeap.remove();
    }
  }

  while (maxHeap.size() > 0) {
    result.push(maxHeap.remove()[1]);
  }

  return result;
};

module.exports = kClosest;
