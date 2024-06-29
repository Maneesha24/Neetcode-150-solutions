const coinChange = require("./index.js");

test("should pass all test cases", () => {
  expect(coinChange([1, 2, 5], 11)).toEqual(3);
  expect(coinChange([2], 3)).toEqual(-1);
  expect(coinChange([1], 0)).toEqual(0);
});
