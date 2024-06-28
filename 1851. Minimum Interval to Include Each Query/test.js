const minInterval = require("./index.js");

test("should pass all the test conditions", () => {
  expect(
    minInterval(
      [
        [1, 4],
        [2, 4],
        [3, 6],
        [4, 4],
      ],
      [2, 3, 4, 5]
    )
  ).toEqual([3, 3, 1, 4]);
  expect(
    minInterval(
      [
        [2, 3],
        [2, 5],
        [1, 8],
        [20, 25],
      ],
      [2, 19, 5, 22]
    )
  ).toEqual([2, -1, 4, 6]);
});
