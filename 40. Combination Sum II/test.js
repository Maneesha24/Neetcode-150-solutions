const combinationSum2 = require("./index.js");

test("should pass all test conditions", () => {
  expect(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)).toEqual([
    [1, 1, 6],
    [1, 2, 5],
    [1, 7],
    [2, 6],
  ]);
  expect(combinationSum2([2, 5, 2, 1, 2], 5)).toEqual([[1, 2, 2], [5]]);
});
