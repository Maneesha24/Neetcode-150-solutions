const longestCommonSubsequence = require("./index.js");

test("should pass the test conditions", () => {
    expect(longestCommonSubsequence("abcde", "ace")).toEqual(3);
    expect(longestCommonSubsequence("abc", "abc")).toEqual(3);
    expect(longestCommonSubsequence("abc", "def")).toEqual(0);
});