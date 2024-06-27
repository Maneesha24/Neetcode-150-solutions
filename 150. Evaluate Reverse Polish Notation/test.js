const evalRPN = require("./index");

test("should pass all test conditions", () => {
  expect(evalRPN(["1","2","+","3","*","4","-"])).toBe(5);
  expect(evalRPN(["1","2","+","3","*","4","-", "1", "+", "2", "/"])).toBe(3);
  expect(evalRPN(["4","13","5","/","+"])).toBe(6);
});
