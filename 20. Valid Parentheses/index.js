/**
 * @author maneeshavenigalla
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const paranObj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  if (s.length % 2 !== 0) {
    return false;
  }

  const stack = [];

  for (const char of s) {
    if (char in paranObj) {
      stack.push(char);
    } else if (paranObj[stack.pop()] != char) {
      return false;
    }
  }

  return !stack.length;
};

module.exports = isValid;
