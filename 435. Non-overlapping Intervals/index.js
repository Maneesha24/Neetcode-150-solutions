/**
 * @author maneeshavenigalla
 * Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum
 * number of intervals you need to remove to make the rest of the intervals non-overlapping.
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = (intervals) => {
  let count = 0;

  intervals.sort((a, b) => a[1] - b[1]);
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (prevEnd <= intervals[i][0]) {
      prevEnd = intervals[i][1];
    } else {
      count++;
    }
  }

  return count;
};

module.exports = eraseOverlapIntervals;