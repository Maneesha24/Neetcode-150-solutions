const maxAreaOfIsland = require("./index.js");

test("should pass the test cases", () => {
    expect(
        maxAreaOfIsland([[2, 1, 1], [1, 1, 0], [0, 1, 1]])
    ).toBe(4);
    expect(
        maxAreaOfIsland([[2, 1, 1], [0, 1, 1], [1, 0, 1]])
    ).toBe(-1);
    expect(
        maxAreaOfIsland([[0, 2]])
    ).toBe(0);
});