const jump = require("./index.js");

test("should pass all test conditions", () => {
    expect(jump([2, 3, 1, 1, 4])).toStrictEqual(2);
    expect(jump([2, 3, 0, 1, 4])).toStrictEqual(2);
});