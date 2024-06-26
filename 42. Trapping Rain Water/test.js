const trap = require("./index.js");

test("should pass all test conditions", () => {
  expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
  expect(trap([4, 2, 0, 3, 2, 5])).toEqual(9);
});
