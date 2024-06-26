const characterReplacement = require("./index.js");

test("should pass all test conditions", () => {
  expect(characterReplacement("ABAB", 2)).toBe(4);
  expect(characterReplacement("AABABBA", 1)).toBe(4);
});
