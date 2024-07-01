const mergeTriplets = require("./index");

test("should pass all test conditions", () => {
    expect(mergeTriplets([[2, 5, 3], [1, 8, 4], [1, 7, 5]], [2, 7, 5])).toBe(true);
    expect(mergeTriplets([[3, 4, 5], [4, 5, 6]], [3, 2, 5])).toBe(false);
    expect(mergeTriplets([[2, 5, 3], [2, 3, 4], [1, 2, 5], [5, 2, 3]], [5, 5, 5])).toBe(true);
});
