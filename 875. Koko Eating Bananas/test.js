const minEatingSpeed = require("./index.js");

test("should pass all test conditions", () => {
  expect(minEatingSpeed([3, 6, 7, 11], 8)).toEqual(4);
  expect(minEatingSpeed([30, 11, 23, 4, 20], 5)).toEqual(30);
  expect(minEatingSpeed([30, 11, 23, 4, 20], 6)).toEqual(23);
});
