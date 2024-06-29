/**
 * @author maneeshavenigalla
 * Given an array of integers temperatures represents the daily temperatures, return an array
 * answer such that answer[i] is the number of days you have to wait after the ith day to get
 * a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
  let result = new Array(temperatures.length).fill(0);

  let stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      let idx = stack.pop();
      result[idx] = i - idx;
    }
    stack.push(i);
  }

  return result;
};

module.exports = dailyTemperatures;
