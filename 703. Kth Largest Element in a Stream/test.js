const KthLargest = require("./index.js");

test("should pass all test conditions", () => {
  const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
  expect(kthLargest.add(3)).toEqual(4);
  expect(kthLargest.add(5)).toEqual(5);
  expect(kthLargest.add(10)).toEqual(5);
  expect(kthLargest.add(9)).toEqual(8);
  expect(kthLargest.add(4)).toEqual(8);
});
