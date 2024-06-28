/**
 * @author maneeshavenigalla
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
 * Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
 * Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate
 * a queen and an empty space, respectively.
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = (n) => {
  let result = [];

  let board = Array.from({ length: n }, () => Array(n).fill("."));

  let colSet = new Set();
  let posSlopeSet = new Set();
  let negSlopeSet = new Set();

  const dfs = (r) => {
    if (r === n) {
      result.push(board.map((row) => row.join("")));
      return result;
    }

    for (let c = 0; c < n; c++) {
      if (posSlopeSet.has(r + c) || negSlopeSet.has(r - c) || colSet.has(c)) {
        continue;
      }

      colSet.add(c);
      posSlopeSet.add(r + c);
      negSlopeSet.add(r - c);
      board[r][c] = "Q";
      dfs(r + 1);

      colSet.delete(c);
      posSlopeSet.delete(r + c);
      negSlopeSet.delete(r - c);
      board[r][c] = ".";
    }
  };

  dfs(0);
  return result;
};

module.exports = solveNQueens;
