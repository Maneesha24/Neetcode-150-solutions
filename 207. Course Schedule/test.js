const canFinish = require("./index.js");

test("should pass the test cases", () => {
  expect(canFinish(2, [[1, 0]])).toBe(true);
  expect(
    canFinish(2, [
      [1, 0],
      [0, 1],
    ])
  ).toBe(false);
});
