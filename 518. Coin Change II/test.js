const coinChange = require("./index.js");

test("should pass all test cases", () => {
    expect(coinChange(5, [1, 2, 5])).toEqual(4);
    expect(coinChange(3, [2])).toEqual(0);
    expect(coinChange(10, [10])).toEqual(1);
});
