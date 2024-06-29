const minCostClimbingStairs = require("./index.js");

test("should pass all test cases", () => {
    expect(minCostClimbingStairs([10, 15, 20])).toEqual(15);
    expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toEqual(6);
});
