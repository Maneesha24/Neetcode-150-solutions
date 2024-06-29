const countSubstrings = require("./index.js");

test("should pass all test conditions", () => {
    expect(countSubstrings("abc")).toEqual(3);
    expect(countSubstrings("aaa")).toEqual(6);
});