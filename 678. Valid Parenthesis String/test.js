const checkValidString = require("./index.js");

test("should pass all test conditions", () => {
    expect(checkValidString("()")).toEqual(true);
    expect(checkValidString("(*)")).toEqual(true);
    expect(checkValidString("(*))")).toEqual(true);
});