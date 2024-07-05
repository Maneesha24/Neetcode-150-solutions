const numDistinct = require("./index.js");

test("should pass all test cases", () => {
    expect(numDistinct("rabbbit", "rabbit")).toEqual(3);
    expect(numDistinct("babgbag", "bag")).toEqual(5);
});
