const kClosest = require("./index.js");

test("should pass all test conditions", () => {
  expect(
    kClosest(
      [
        [1, 3],
        [-2, 2],
      ],
      1
    )
  ).toStrictEqual([[-2, 2]]);
  expect(
    kClosest(
      [
        [3, 3],
        [5, -1],
        [-2, 4],
      ],
      2
    )
  ).toStrictEqual([
    [-2, 4],
    [3, 3],
  ]);
});
