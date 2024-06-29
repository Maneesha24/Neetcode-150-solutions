/**
 * @author maneeshavenigalla
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const result = [];

  let paran = [];

  const dfs = (open, close) => {
    if (open >= n && close >= n) {
      result.push(paran.join(""));
      return result;
    }

    if (open < n) {
      paran.push("(");
      dfs(open + 1, close);
      paran.pop();
    }

    if (close < open && close < n) {
      paran.push(")");
      dfs(open, close + 1);
      paran.pop();
    }
  };

  dfs(0, 0);
  return result;
};

module.exports = generateParenthesis;
