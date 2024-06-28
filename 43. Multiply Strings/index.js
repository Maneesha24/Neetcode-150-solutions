/**
 * @author maneeshavenigalla
 * Given two non-negative integers num1 and num2 represented as strings, return the
 * product of num1 and num2, also represented as a string.
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = (num1, num2) => {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }

  let result = new Array(num1.length + num2.length).fill(0);
  num1 = num1.split("").reverse().join("");
  num2 = num2.split("").reverse().join("");

  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      const prod = parseInt(num1[i]) * parseInt(num2[j]);

      result[i + j] += prod;
      result[i + j + 1] += Math.floor(result[i + j] / 10);
      result[i + j] %= 10;
    }
  }

  let i = result.length - 1;

  while (i >= 0 && result[i] === 0) {
    i--;
  }

  let prod = "";

  while (i >= 0) {
    prod += result[i];
    i--;
  }

  return prod;
};

module.exports = multiply;
