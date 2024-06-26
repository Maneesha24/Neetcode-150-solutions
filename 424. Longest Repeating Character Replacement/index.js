/**
 * @author maneeshavenigalla
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character.
 * You can perform this operation at most k times. Return the length of the longest substring containing the same letter you can get after performing the above operations.
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
  let maxLength = 0;
  let start = 0;

  let maxCount = 0;

  let charCount = new Array(26).fill(0);

  for (let end = 0; end < s.length; end++) {
    let endIndex = s.charCodeAt(end) - "A".charCodeAt(0);
    charCount[endIndex] += 1;

    maxCount = Math.max(maxCount, charCount[endIndex]);

    while (end - start + 1 - maxCount > k) {
      let startIndex = s.charCodeAt(start) - "A".charCodeAt(0);
      charCount[startIndex] -= 1;
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

module.exports = characterReplacement;
