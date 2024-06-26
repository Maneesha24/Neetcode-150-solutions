/**
 * @author maneeshavenigalla
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
 * it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is
 * a palindrome, or false otherwise.
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!isAlphaNum(s[left])) {
      left++;
    } else if (!isAlphaNum(s[right])) {
      right--;
    } else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
};

const isAlphaNum = (char) => {
  return (
    (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
    (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) ||
    (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 56)
  );
};

module.exports = isPalindrome;
