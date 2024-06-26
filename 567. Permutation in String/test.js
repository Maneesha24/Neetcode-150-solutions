const checkInclusion = require("./index.js");

test("should pass all test conditions", () => {
  expect(checkInclusion("ab", "eidbaooo")).toBe(true);
  expect(checkInclusion("ab", "eidboaoo")).toBe(false);
});
