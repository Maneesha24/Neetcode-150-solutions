const findDuplicate = require("./index.js");

test("should pass all test conditions", () => {
  expect(findDuplicate([1, 3, 4, 2, 2])).toEqual(2);
  expect(findDuplicate([3, 1, 3, 4, 2])).toEqual(3);
});
