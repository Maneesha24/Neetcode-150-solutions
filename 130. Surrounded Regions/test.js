const solve = require("./index.js");

test("should pass the test cases", () => {
    expect(
        solve([["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]])
    ).toEqual([["X", "X", "X", "X"], ["X", "X", "X", "X"], ["X", "X", "X", "X"], ["X", "O", "X", "X"]]);
    expect(
        solve([["X"]])
    ).toEqual([["X"]]);
});