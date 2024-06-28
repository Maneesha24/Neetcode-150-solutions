const merge = require("./index.js");

test("should pass all test conditions", () => {
  expect(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ])
  ).toStrictEqual([
    [1, 6],
    [8, 10],
    [15, 18],
  ]);
  expect(
    merge([
      [1, 4],
      [4, 5],
    ])
  ).toStrictEqual([[1, 5]]);
  expect(
    merge([
      [1, 4],
      [0, 4],
    ])
  ).toStrictEqual([[0, 4]]);
  expect(
    merge([
      [1, 4],
      [2, 3],
    ])
  ).toStrictEqual([[1, 4]]);
});
