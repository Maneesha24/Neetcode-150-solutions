const topKFrequent = require("./index.js");

test("should pass all test conditions", () => {
  expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  expect(topKFrequent([1], 1)).toEqual([1]);
});
