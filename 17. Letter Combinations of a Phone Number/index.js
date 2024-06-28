/**
 * @author maneeshavenigalla
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
 * Return the answer in any order. A mapping of digits to letters (just like on the telephone buttons) is given below.
 * Note that 1 does not map to any letters.
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  const digitsChar = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  if (digits === "") {
    return [];
  }

  const result = [];
  const set = [];

  const dfs = (idx) => {
    if (set.length === digits.length) {
      result.push(set.join(""));
      return result;
    }

    if (idx >= digits.length) {
      return;
    }

    for (const char of digitsChar[digits[idx]]) {
      set.push(char);
      dfs(idx + 1);
      set.pop();
      dfs(idx + 1);
    }
  };

  dfs(0);
  return result;
};

module.exports = letterCombinations;
