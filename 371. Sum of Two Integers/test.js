const getSum = require("./index.js");

test("should pass all test conditions", () => {
  expect(getSum(1, 2)).toEqual(3);
  expect(getSum(2, 3)).toEqual(5);
});
