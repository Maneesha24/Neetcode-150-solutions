const WordDictionary = require("./index.js");

test("should pass the test cases", () => {
  let dict1 = new WordDictionary(1);
  dict1.addWord("bad");
  dict1.addWord("dad");
  dict1.addWord("mad");
  expect(dict1.search("pad")).toBe(false);
  expect(dict1.search("bad")).toBe(true);
  expect(dict1.search(".ad")).toBe(true);
  expect(dict1.search("b..")).toBe(true);
});
