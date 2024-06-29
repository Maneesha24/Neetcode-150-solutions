/**
 * @author maneeshavenigalla
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence
 * of one or more dictionary words. Note that the same word in the dictionary may be reused multiple times in the segmentation.
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  let n = s.length;

  let dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
};

module.exports = wordBreak;
