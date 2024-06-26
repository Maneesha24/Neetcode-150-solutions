/**
 * @author maneeshavenigalla
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length != t.length) {
    return false;
  }

  const sObj = {};

  for (const char of s) {
    if (char in sObj) {
      sObj[char] += 1;
    } else {
      sObj[char] = 1;
    }
  }

  for (const char of t) {
    if (!(char in sObj) || sObj[char] < 1) {
      return false;
    } else {
      sObj[char] -= 1;
    }
  }

  return true;
};

module.exports = isAnagram;
