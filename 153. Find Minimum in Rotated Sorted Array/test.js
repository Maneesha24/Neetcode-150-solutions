const findMin = require("./index.js");

test("should pass all test conditions", () => {
  expect(findMin([3, 4, 5, 1, 2])).toEqual(1);
  expect(findMin([4, 5, 6, 7, 0, 1, 2])).toEqual(0);
  expect(findMin([11, 13, 15, 17])).toEqual(11);
  expect(findMin([2, 1])).toEqual(1);
});
