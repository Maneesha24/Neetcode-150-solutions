const numDecodings = require("./index.js");

test("should pass all test cases", () => {
  expect(numDecodings("12")).toEqual(2);
  expect(numDecodings("226")).toEqual(3);
  expect(numDecodings("06")).toEqual(0);
});
