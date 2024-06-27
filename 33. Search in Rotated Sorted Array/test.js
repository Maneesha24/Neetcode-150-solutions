const search = require("./index.js");

test("should pass all test conditions", () => {
  expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4);
  expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toEqual(-1);
  expect(search([1], 0)).toEqual(-1);
  expect(search([3, 4, 5, 6, 1, 2], 1)).toEqual(4);
});