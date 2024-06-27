const TimeMap = require("./index");

test("should pass the test cases", () => {
  let timeMap = new TimeMap();
  timeMap.set("foo", "bar", 1);
  expect(timeMap.get("foo", 1)).toBe("bar");
  expect(timeMap.get("foo", 3)).toBe("bar");
  timeMap.set("foo", "bar2", 4);
  expect(timeMap.get("foo", 4)).toBe("bar2");
  expect(timeMap.get("foo", 5)).toBe("bar2");
});
