const eraseOverlapIntervals = require("./index.js");

test("should pass all the test conditions", () => {
  expect(
    eraseOverlapIntervals([
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 3],
    ])
  ).toEqual(1);
  expect(
    eraseOverlapIntervals([
      [1, 2],
      [1, 2],
      [1, 2],
    ])
  ).toEqual(2);
  expect(
    eraseOverlapIntervals([
      [1, 2],
      [2, 3],
    ])
  ).toEqual(0);
});
