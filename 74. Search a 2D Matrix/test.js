const search = require("./index.js");

test("should pass all test conditions", () => {
  expect(search([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)).toEqual(true);
  expect(search([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)).toEqual(false);
});
