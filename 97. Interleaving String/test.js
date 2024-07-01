const isInterleave = require("./index.js");

test("should pass all test cases", () => {
    expect(isInterleave("aaaa", "bbbb", "aabbbbaa")).toEqual(true);
    expect(isInterleave("", "", "")).toEqual(true);
    expect(isInterleave("aabcc", "dbbca", "aadbbcbcac")).toEqual(false);
});
