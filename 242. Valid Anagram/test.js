const isAnagram = require("./index");

test("should pass all test conditions", () => {
  expect(isAnagram("anagram", "nagaram")).toBe(true);
  expect(isAnagram("rat", "car")).toBe(false);
});
