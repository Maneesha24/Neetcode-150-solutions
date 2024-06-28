const leastInterval = require("./index.js");

test("should pass all test conditions", () => {
  expect(leastInterval(["A", "A", "A", "B", "B", "B"], 2)).toStrictEqual(8);
  expect(leastInterval(["A", "C", "A", "B", "D", "B"], 1)).toStrictEqual(6);
  expect(leastInterval(["A", "A", "A", "B", "B", "B"], 3)).toStrictEqual(10);
});
