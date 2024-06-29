const GraphNode = require("../GraphNode.js");
const validTree = require("./index.js");

test("should pass all test conditions", () => {
  expect(
    validTree(5, [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 4],
    ])
  ).toBe(true);
});
