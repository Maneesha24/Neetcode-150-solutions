const lastStoneWeight = require("./index.js");

test("should pass all test conditions", () => {
  expect(lastStoneWeight([2,7,4,1,8,1])).toEqual(1);
  expect(lastStoneWeight([1])).toEqual(1);
});
