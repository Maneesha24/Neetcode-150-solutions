const reverse = require("./index.js");

test("should pass the test conditions", () => {
  expect(reverse(123)).toEqual(321);
  expect(reverse(-123)).toEqual(-321);
  expect(reverse(120)).toEqual(21);
});
