const plusOne = require("./index.js");

test("should pass all test cases", () => {
  expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  expect(plusOne([9])).toEqual([1, 0]);
  expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
});
