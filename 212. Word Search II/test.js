const findWords = require("./index.js");

test("should pass the test cases", () => {
  expect(
    findWords(
      [
        ["o", "a", "a", "n"],
        ["e", "t", "a", "e"],
        ["i", "h", "k", "r"],
        ["i", "f", "l", "v"],
      ],
      ["oath", "pea", "eat", "rain"]
    )
  ).toEqual(["oath", "eat"]);
  expect(
    findWords(
      [
        ["a", "b"],
        ["c", "d"],
      ],
      ["abcb"]
    )
  ).toEqual([]);
});
