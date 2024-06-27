/**
 * @author maneeshavenigalla
 * You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.
 * Return the integer that represents the evaluation of the expression.
 * The operands may be integers or the results of other operations.
 * The operators include '+', '-', '*', and '/'.
 * Assume that division between integers always truncates toward zero.
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
  const stack = [];

  for (const token of tokens) {
    if (!isNaN(token)) {
      stack.push(parseInt(token));
    } else if (token === "+") {
      const num2 = stack.pop();
      const num1 = stack.pop();
      stack.push(num1 + num2);
    } else if (token === "-") {
      const num2 = stack.pop();
      const num1 = stack.pop();
      stack.push(num1 - num2);
    } else if (token === "*") {
      const num2 = stack.pop();
      const num1 = stack.pop();
      stack.push(num1 * num2);
    } else if (token === "/") {
      const num2 = stack.pop();
      const num1 = stack.pop();
      stack.push(Math.trunc(num1 / num2));
    }
  }

  return stack.pop();
};

module.exports = evalRPN;
