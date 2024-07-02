const longestIncreasingPath = require("./index.js");

test("should pass the test cases", () => {
    expect(
        longestIncreasingPath([[9, 9, 4], [6, 6, 8], [2, 1, 1]])
    ).toBe(4);
    expect(
        longestIncreasingPath([[3, 4, 5], [3, 2, 6], [2, 2, 1]])
    ).toBe(4);
    expect(
        longestIncreasingPath([[1]])
    ).toBe(1);
});