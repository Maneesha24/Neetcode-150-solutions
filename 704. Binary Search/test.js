const search = require("./index.js");

test("should pass all test conditions", () => {
  expect(search([-1, 0, 3, 5, 9, 12], 9)).toEqual(4);
  expect(search([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1);
});
