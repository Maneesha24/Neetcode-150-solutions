const largestRectangleArea = require("./index.js");

test("should pass all test conditions", () => {
  expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toEqual(10);
  expect(largestRectangleArea([2, 4])).toEqual(4);
});
