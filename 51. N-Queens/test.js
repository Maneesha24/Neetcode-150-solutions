const solveNQueens = require("./index.js");

test("should pass all test cases", () => {
  expect(solveNQueens(4)).toEqual([
    [".Q..", "...Q", "Q...", "..Q."],
    ["..Q.", "Q...", "...Q", ".Q.."],
  ]);
  expect(solveNQueens(1)).toEqual([["Q"]]);
});
