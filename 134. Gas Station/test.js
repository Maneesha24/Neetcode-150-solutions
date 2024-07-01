const canCompleteCircuit = require("./index");

test("should pass all test conditions", () => {
    expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toBe(3);
    expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toBe(-1);
});
