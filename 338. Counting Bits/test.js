const countBits = require("./index.js");

test("should pass the test conditions", () => {
  expect(countBits(2)).toEqual([0, 1, 1]);
  expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
});
