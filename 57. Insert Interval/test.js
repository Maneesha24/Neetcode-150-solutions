const insert = require("./index.js");

test("should pass all test conditions", () => {
  expect(
    insert(
      [
        [1, 3],
        [6, 9],
      ],
      [2, 5]
    )
  ).toStrictEqual([
    [1, 5],
    [6, 9],
  ]);
  expect(
    insert(
      [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
      ],
      [4, 8]
    )
  ).toStrictEqual([
    [1, 2],
    [3, 10],
    [12, 16],
  ]);
});
