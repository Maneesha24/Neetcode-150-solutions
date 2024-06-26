/**
 * @author maneeshavenigalla
 * Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.
 * Encodes a list of strings to a single string.
 * @param {string[]} strs
 * @return {string}
 */
const encode = (strs) => {
  let result = "";

  for (const str of strs) {
    result += `${str.length}#${str}`;
  }

  return result;
};

/**
 * @author maneeshavenigalla
 * Decodes a single string to a list of strings.
 * @param {string} s
 * @return {string[]}
 */
const decode = (s) => {
  let i = 0;
  let result = [];

  while (i < s.length) {
    let j = i;

    while (s[j] != "#") {
      j++;
    }

    let strLen = parseInt(s.substring(i, j));
    result.push(s.substring(j + 1, j + strLen + 1));

    i = j + strLen + 1;
  }

  return result;
};

/**
 * Your s will be called as such:
 * decode(encode(strs));
 */

module.exports = { encode, decode };
