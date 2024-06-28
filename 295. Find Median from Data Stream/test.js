const MedianFinder = require("./index.js");

test("should pass the test cases", () => {
  let medianFinder = new MedianFinder();
  medianFinder.addNum(1);
  medianFinder.addNum(2);
  expect(medianFinder.findMedian()).toEqual(1.5);
  medianFinder.addNum(3);
  expect(medianFinder.findMedian()).toEqual(2.0);
});
