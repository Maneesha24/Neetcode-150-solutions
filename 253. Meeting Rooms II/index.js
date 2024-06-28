/**
 * @author maneeshavenigalla
 * Given an array of meeting time intervals intervals where intervals[i] = [starti, endi],
 * return the minimum number of conference rooms required.
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = (intervals) => {
  let count = 0;

  intervals.sort((a, b) => a[0] - b[0]);
  let endIntervals = [...intervals.sort((a, b) => a[1] - b[1])];

  let j = 0;

  for (let i = 0; i < intervals.length; i++) {
    if (endIntervals[j][1] < intervals[i][0]) {
      j++;
    } else {
      count++;
    }
  }

  return count;
};

module.exports = minMeetingRooms;
