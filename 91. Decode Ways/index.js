/**
 * @author maneeshavenigalla
 * Given a string s containing only digits, return the number of ways to decode it.
 * The test cases are generated so that the answer fits in a 32-bit integer.
 * @param {string} s
 * @return {number}
 */
const numDecodings = (s) => {
  let n = s.length;

  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    if (s[i - 1] != "0") {
      dp[i] += dp[i - 1];
    }

    if (i > 1 && s[i - 2] != "0" && parseInt(s.substring(i - 2, i)) <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
};

module.exports = numDecodings;
