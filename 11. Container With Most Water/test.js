const maxArea = require("./index.js");

test("should pass all test conditions", () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  expect(maxArea([1, 1])).toEqual(1);
});
