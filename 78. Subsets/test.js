const subsets = require("./index.js");

test("should pass all test conditions", () => {
  expect(subsets([1, 2, 3])).toStrictEqual([
    [1, 2, 3],
    [1, 2],
    [1, 3],
    [1],
    [2, 3],
    [2],
    [3],
    [],
  ]);
  expect(subsets([0])).toStrictEqual([[0], []]);
});
