/**
 * @author maneeshavenigalla
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and
 * return an array of the non-overlapping intervals that cover all the intervals in the input.
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
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

module.exports = merge;
