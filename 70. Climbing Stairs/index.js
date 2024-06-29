/**
 * @author maneeshavenigalla
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }

  let prev1 = 1;
  let prev2 = 2;

  let result = 0;

  for (let i = 3; i <= n; i++) {
    result = prev2 + prev1;
    prev2 = result;
    prev1 = prev2;
  }

  return result;
};

module.exports = climbStairs;
