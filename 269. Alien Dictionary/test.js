const alienOrder = require("./index.js");

test("should pass the test conditions", () => {
    expect(alienOrder(["wrt", "wrf", "er", "ett", "rftt"])).toEqual("wertf");
    expect(alienOrder(["z", "x"])).toEqual("zx");
    expect(alienOrder(["z", "x", "z"])).toEqual("");
});