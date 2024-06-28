/**
 * @author maneeshavenigalla
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * Return all possible palindrome partitioning of s.
 * @param {string} s
 * @return {string[][]}
 */
const partition = (s) => {
  const result = [];
  const set = [];

  const dfs = (idx) => {
    if (idx >= s.length) {
      result.push([...set]);
      return result;
    }

    for (let i = idx; i < s.length; i++) {
      if (isPalindrome(idx, i, s)) {
        set.push(s.substring(idx, i + 1));
        dfs(i + 1);
        set.pop();
      }
    }
  };

  dfs(0);
  return result;
};

const isPalindrome = (left, right, s) => {
  while (left < right) {
    if (s[left] != s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

module.exports = partition;
