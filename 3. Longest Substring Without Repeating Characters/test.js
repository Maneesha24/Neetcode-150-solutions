const lengthOfLongestSubstring = require('./index.js');

test('should pass all test conditions', () => {
  expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  expect(lengthOfLongestSubstring("")).toBe(0);
});