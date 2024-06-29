const wordBreak = require("./index.js");

test("should pass all test conditions", () => {
  expect(wordBreak("leetcode", ["leet", "code"])).toEqual(true);
  expect(wordBreak("applepenapple", ["apple", "pen"])).toEqual(true);
  expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toEqual(
    false
  );
});
