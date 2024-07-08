const climbStairs = require("./index.js");

test("should pass all test cases", () => {
  expect(climbStairs(2)).toEqual(2);
  expect(climbStairs(3)).toEqual(3);
});
