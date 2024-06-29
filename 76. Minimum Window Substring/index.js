/**
 * @author maneeshavenigalla
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring
 * of s such that every character in t (including duplicates) is included in the window. If there is no such
 * substring, return the empty string "". The testcases will be generated such that the answer is unique.
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  let charObj = {};

  for (const char of t) {
    if (char in charObj) {
      charObj[char] += 1;
    } else {
      charObj[char] = 1;
    }
  }

  let left = 0;
  let right = 0;
  let requiredChars = t.length;
  let minLength = Infinity;
  let minWindowStart = 0;

  while (right < s.length) {
    if (s[right] in charObj && charObj[s[right]] > 0) {
      requiredChars--;
    }

    charObj[s[right]] -= 1;
    right++;

    while (requiredChars == 0) {
      if (right - left < minLength) {
        minLength = right - left;
        minWindowStart = left;
      }

      charObj[s[left]] += 1;

      if (s[left] in charObj && charObj[s[left]] > 0) {
        requiredChars++;
      }

      left++;
    }
  }

  return minLength == Infinity
    ? ""
    : s.substring(minWindowStart, minWindowStart + minLength);
}

module.exports = minWindow;