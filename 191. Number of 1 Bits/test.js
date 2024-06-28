const countBits = require("./index.js");

test("should pass the test conditions", () => {
  expect(countBits(0o1011)).toEqual(3);
  expect(countBits(0o10000000)).toEqual(1);
});
