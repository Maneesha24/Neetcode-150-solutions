const multiply = require("./index.js");

test("should pass all test cases", () => {
  expect(multiply("2", "3")).toEqual("6");
  expect(multiply("123", "456")).toEqual("56088");
});
