const Trie = require("./index.js");

test("should pass the test cases", () => {
  let trei1 = new Trie();
  trei1.insert("apple");
  expect(trei1.search("apple")).toBe(true);
  expect(trei1.search("app")).toBe(false);
  expect(trei1.startsWith("app")).toBe(true);
  trei1.insert("app");
  expect(trei1.search("app")).toBe(true);
});
