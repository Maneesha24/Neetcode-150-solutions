const groupAnagrams = require("./index");

test("should pass all test conditions", () => {
  expect(
    groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
  ).toStrictEqual([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]);
  expect(groupAnagrams([""])).toStrictEqual([[""]]);
  expect(groupAnagrams(["a"])).toStrictEqual([["a"]]);
});
