const MinStack = require("./index");

test("should pass the test cases", () => {
  let stack1 = new MinStack();
  stack1.push(-2);
  stack1.push(0);
  stack1.push(-3);
  expect(stack1.getMin()).toBe(-3);
  stack1.pop();
  expect(stack1.top()).toBe(0);
  expect(stack1.getMin()).toBe(-2);
});
