const findLadders = require("./index.js");

test("should pass all test conditions", () => {
    expect(findLadders("cat", "sag", ["bat", "bag", "sag", "dag", "dot"])).toEqual(4);
    expect(findLadders("cat", "sag", ["bat", "bag", "sat", "dag", "dot"])).toEqual(0);
});