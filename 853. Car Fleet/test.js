const carFleet = require("./index.js");

test("should pass all test conditions", () => {
  expect(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])).toBe(3);
  expect(carFleet(10, [3], [3])).toBe(1);
  expect(carFleet(100, [0, 2, 4], [4, 2, 1])).toBe(1);
});
