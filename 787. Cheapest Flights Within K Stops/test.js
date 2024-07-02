const findCheapestPrice = require("./index.js");

test("should pass the test cases", () => {
    expect(findCheapestPrice(4, [[0, 1, 200], [1, 2, 100], [1, 3, 300], [2, 3, 100]], 0, 3, 1)).toBe(500);
    expect(
        findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1)
    ).toBe(200);
    expect(
        findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0)
    ).toBe(500);
});
