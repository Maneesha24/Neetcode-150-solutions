/**
 * @author maneeshavenigalla
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = (words) => {
  let wordMap = {};

  const buildDict = (word) => {
    let charCount = new Array(26).fill(0);

    for (const char of word) {
      let index = char.charCodeAt(0) - "a".charCodeAt(0);
      charCount[index] += 1;
    }

    let key = charCount.toString();

    if (key in wordMap) {
      wordMap[key].push(word);
    } else {
      wordMap[key] = [word];
    }
  };

  for (const word of words) {
    buildDict(word);
  }

  return Object.values(wordMap);
};

module.exports = groupAnagrams;
