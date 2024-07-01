const isNStraightHand = require("./index");

test("should pass all test conditions", () => {
    expect(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)).toBe(true);
    expect(isNStraightHand([1, 2, 3, 4, 5], 4)).toBe(false);
});
