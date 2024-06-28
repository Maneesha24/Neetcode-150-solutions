const myPow = require("./index.js");

test("should pass all test cases", () => {
  expect(myPow(2, 10)).toEqual(1024);
  expect(myPow(2.1, 3)).toEqual(9.261000000000001);
  expect(myPow(2, -2)).toEqual(0.25);
});
