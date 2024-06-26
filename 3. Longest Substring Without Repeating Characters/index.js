/**
 * @author maneeshavenigalla
 * Given a string s, find the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) =>{
  let left = 0;
  let right = 0;

  let result = 0;

  let seen = new Set();

  while (right < s.length) {
    if (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    } else {
      seen.add(s[right]);
      right++;

      result = Math.max(result, seen.size);
    }
  }

  return result;
};

module.exports = lengthOfLongestSubstring;
