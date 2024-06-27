const generateParenthesis = require("./index.js");

test("should pass all test conditions", () => {
  expect(generateParenthesis(3)).toEqual(["((()))","(()())","(())()","()(())","()()()"]);
  expect(generateParenthesis(1)).toEqual(["()"]);
});
