const isValid = require("./index.js");

test("should pass all test conditions", () => {
  expect(isValid("()")).toEqual(true);
  expect(isValid("()[]{}")).toEqual(true);
  expect(isValid("[)")).toEqual(false);
});
