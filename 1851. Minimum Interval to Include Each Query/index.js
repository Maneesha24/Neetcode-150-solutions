const MinHeap = require("../MinHeap");

/**
 * @author maneeshavenigalla
 * You are given a 2D integer array intervals, where intervals[i] = [lefti, righti] describes the ith interval starting at lefti and
 * ending at righti (inclusive). The size of an interval is defined as the number of integers it contains, or more formally righti - lefti + 1.
 * You are also given an integer array queries. The answer to the jth query is the size of the smallest interval i such that
 * lefti <= queries[j] <= righti. If no such interval exists, the answer is -1. Return an array containing the answers to the queries.
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
const minInterval = (intervals, queries) => {
  intervals.sort((a, b) => a - b);
  let result = [];
  let minHeap = new MinHeap();

  for (const query of queries) {
    let i = 0;
    while (i < intervals.length && intervals[i][0] <= query) {
      minHeap.add([intervals[i][1] - intervals[i][0] + 1, intervals[i][1]]);
      i++;
    }

    while (!minHeap.isEmpty() && minHeap.peek()[1] < query) {
      minHeap.remove();
    }

    if (!minHeap.isEmpty()) {
      result.push(minHeap.peek()[0]);
    } else {
      result.push(-1);
    }
  }

  return result;
};

module.exports = minInterval;
