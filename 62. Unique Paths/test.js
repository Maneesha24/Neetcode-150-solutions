const uniquePaths = require("./index.js");

test("should pass all test conditions", () => {
    expect(uniquePaths(3, 7)).toBe(28);
    expect(uniquePaths(3, 2)).toBe(3);
});