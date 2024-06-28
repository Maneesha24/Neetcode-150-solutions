const missingNumber = require("./index.js");

test("should pass the test conditions", () => {
  expect(missingNumber([3, 0, 1])).toEqual(2);
  expect(missingNumber([0, 1])).toEqual(2);
  expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toEqual(8);
});
