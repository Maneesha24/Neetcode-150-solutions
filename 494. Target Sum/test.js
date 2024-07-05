const findTargetSumWays = require("./index.js");

test("should pass all test conditions", () => {
    expect(findTargetSumWays([1, 1, 1, 1, 1], 3)).toEqual(5);
    expect(findTargetSumWays([1], 1)).toEqual(1);
});