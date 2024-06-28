/**
 * @author maneeshavenigalla
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti.
 * You are also given an interval newInterval = [start, end] that represents the start and end of another interval. Insert newInterval into intervals such that intervals is still sorted in ascending order
 * by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary). Return intervals after the insertion.
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let [prevStart, prevEnd] = result[result.length - 1];
    let [currStart, currEnd] = intervals[i];

    if (result.length > 0 && prevEnd >= currStart) {
      result.pop();
      result.push([prevStart, Math.max(currEnd, prevEnd)]);
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
};

module.exports = insert;
