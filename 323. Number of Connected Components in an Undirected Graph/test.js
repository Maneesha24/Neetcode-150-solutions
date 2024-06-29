const countComponents = require("./index.js");

test("should pass the test cases", () => {
  expect(
    countComponents(5, [
      [0, 1],
      [1, 2],
      [3, 4],
    ])
  ).toBe(2);
  expect(
    countComponents(5, [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ])
  ).toBe(1);
});
