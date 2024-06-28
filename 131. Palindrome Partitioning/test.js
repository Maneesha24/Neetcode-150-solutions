const partition = require("./index.js");

test("should pass all test conditions", () => {
  expect(partition("aab")).toStrictEqual([
    ["a", "a", "b"],
    ["aa", "b"],
  ]);
  expect(partition("a")).toStrictEqual([["a"]]);
});
