const minDistance = require("./index.js");

test("should pass the test conditions", () => {
    expect(minDistance("horse", "ros")).toEqual(3);
    expect(minDistance("intention", "execution")).toEqual(5);
});