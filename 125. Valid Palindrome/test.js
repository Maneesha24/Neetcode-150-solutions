const isPalindrome = require("./index.js");

test("should pass all test conditions", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
  expect(isPalindrome("race a car")).toEqual(false);
  expect(isPalindrome(" ")).toEqual(true);
  expect(isPalindrome("0P")).toEqual(false);
});
