const LRUCache = require("./index");

test("should pass the test cases", () => {
  let cache1 = new LRUCache(10);
  cache1.put("a", 1);
  expect(cache1.get("a")).toBe(1);
  let cache2 = new LRUCache(5);
  cache2.put("b", 2);
  cache2.put("c", 3);
  expect(cache2.get("c")).toBe(3);
});
