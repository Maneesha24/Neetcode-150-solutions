const maxProfit = require("./index.js");

test("should pass all test conditions", () => {
    expect(maxProfit([1, 2, 3, 0, 2])).toEqual(3);
    expect(maxProfit([1])).toEqual(0);
});