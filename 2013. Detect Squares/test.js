const DetectSquares = require("./index");

test("should pass the test cases", () => {
  let detectSquare = new DetectSquares();
  detectSquare.add([3, 10]);
  detectSquare.add([11, 2]);
  detectSquare.add([3, 2]);
  expect(detectSquare.count([11, 10])).toBe(1);
  expect(detectSquare.count([14, 8])).toBe(0);
  detectSquare.add([11, 2]);
});
