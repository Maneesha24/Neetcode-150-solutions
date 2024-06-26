const minWindow = require("./index.js");

test("should pass all test conditions", () => {
  expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
  expect(minWindow("a", "a")).toBe("a");
  expect(minWindow("a", "aa")).toBe("");
});