const subsetsWithDup = require("./index.js");

test("should pass all test conditions", () => {
  expect(subsetsWithDup([1, 2, 2])).toStrictEqual([
    [1, 2, 2],
    [1, 2],
    [1],
    [2, 2],
    [2],
    [],
  ]);
  expect(subsetsWithDup([0])).toStrictEqual([[0], []]);
  expect(subsetsWithDup([4, 1, 4])).toStrictEqual([
    [1, 4, 4],
    [1, 4],
    [1],
    [4, 4],
    [4],
    [],
  ]);
});
