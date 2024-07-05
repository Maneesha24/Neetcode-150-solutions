const maxCoins = require("./index.js");

test("should pass all test conditions", () => {
    expect(maxCoins([3, 1, 5, 8])).toBe(167);
    expect(maxCoins([1, 5])).toBe(10);
});