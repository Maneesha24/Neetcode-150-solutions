const swimInWater = require("./index.js");

test("should pass all test conditions", () => {
    expect(swimInWater([[0, 2], [1, 3]])).toEqual(3);
    expect(swimInWater([[0, 1, 2, 3, 4], [24, 23, 22, 21, 5], [12, 13, 14, 15, 16], [11, 17, 18, 19, 20], [10, 9, 8, 7, 6]])).toEqual(16);
});