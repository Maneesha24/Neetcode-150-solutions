/**
 * @author maneeshavenigalla
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 * In other words, return true if one of s1's permutations is the substring of s2.
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
  let s1Array = new Array(26).fill(0);
  let s2Array = new Array(26).fill(0);

  let matches = 0;

  for (let i = 0; i < s1.length; i++) {
    let s1Idx = s1.charCodeAt(i) - 97;
    s1Array[s1Idx] += 1;

    let s2Idx = s2.charCodeAt(i) - 97;
    s2Array[s2Idx] += 1;
  }

  for (let i = 0; i < 26; i++) {
    if (s1Array[i] === s2Array[i]) {
      matches++;
    }
  }

  if (matches === 26) {
    return true;
  }

  let left = 0;
  for (let i = s1.length; i < s2.length; i++) {
    let s2Idx = s2.charCodeAt(i) - 97;
    s2Array[s2Idx] += 1;

    if (s2Array[s2Idx] === s1Array[s2Idx]) {
      matches++;
    } else if (s2Array[s2Idx] === s1Array[s2Idx] + 1) {
      matches--;
    }

    let s1Idx = s2.charCodeAt(left) - 97;
    s2Array[s1Idx] -= 1;

    if (s2Array[s1Idx] === s1Array[s1Idx]) {
      matches++;
    } else if (s2Array[s1Idx] === s1Array[s1Idx] - 1) {
      matches--;
    }

    if (matches === 26) {
      return true;
    }

    left++;
  }

  return false;
};

module.exports = checkInclusion;