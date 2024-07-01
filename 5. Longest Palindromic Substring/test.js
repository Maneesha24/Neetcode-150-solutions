const longestPalindrome = require("./index.js");

test("should pass all test conditions", () => {
    expect(longestPalindrome("babad")).toEqual("bab");
    expect(longestPalindrome("cbbd")).toEqual("bb");
    expect(longestPalindrome("bb")).toEqual("bb");
    expect(longestPalindrome("a")).toEqual("a");
});