const countBits = require("./index.js");

test("should pass the test conditions", () => {
  expect(countBits(0b00000010100101000001111010011100)).toEqual(964176192);
  expect(countBits(0b11111111111111111111111111111101)).toEqual(3221225471);
});
