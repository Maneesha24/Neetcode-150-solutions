const minCostConnectPoints = require("./index.js");

test("should pass the test cases", () => {
    expect(minCostConnectPoints([[0, 0], [2, 2], [3, 3], [2, 4], [4, 2]])).toBe(10);
});
