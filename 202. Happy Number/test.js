const isHappy = require("./index.js");

test("should pass the test conditions", () => {
  expect(isHappy(19)).toEqual(true);
  expect(isHappy(2)).toEqual(false);
});