const maxProduct = require("./index.js");

test("should pass all test conditions", () => {
  expect(maxProduct([2, 3, -2, 4])).toStrictEqual(6);
  expect(maxProduct([-2, 0, -1])).toStrictEqual(0);
  expect(maxProduct([-2])).toStrictEqual(-2);
  expect(maxProduct([-2, 3, -4])).toStrictEqual(24);
});
