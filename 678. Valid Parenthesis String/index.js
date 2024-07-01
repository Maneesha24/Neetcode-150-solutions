/**
 * @author maneeshavenigalla
 * Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid. 
 * The following rules define a valid string:
 * Any left parenthesis '(' must have a corresponding right parenthesis ')'
 * Any right parenthesis ')' must have a corresponding left parenthesis '('
 * Left parenthesis '(' must go before the corresponding right parenthesis ')'.
 * '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = (s) => {

    let leftOpenMin = 0;
    let leftOpenMax = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === "(") {
            leftOpenMin++;
            leftOpenMax++;
        } else if (char === ")") {
            leftOpenMin--;
            leftOpenMax--;
        } else {
            leftOpenMin--;
            leftOpenMax++;
        }

        if (leftOpenMax < 0) {
            return false;
        }

        if (leftOpenMin < 0) {
            leftOpenMin = 0;
        }
    }

    return true;

};

module.exports = checkValidString;