const canPartition = require("./index.js");

test("should pass all test conditions", () => {
    expect(canPartition([1, 5, 11, 5])).toEqual(true);
    expect(canPartition([1, 2, 3, 5])).toEqual(false);
});