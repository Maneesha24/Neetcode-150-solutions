/**
 * @author maneeshavenigalla
 * Given a string s, return the number of palindromic substrings in it.
 * A string is a palindrome when it reads the same backward as forward.
 * A substring is a contiguous sequence of characters within the string.
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
    let count = 0;

    const countPalindrome = (left, right) => {
        while (left >= 0 && right < s.length && s[left] == s[right]) {
            count++;
            left--;
            right++;
        }
    };

    for (let i = 0; i < s.length; i++) {
        countPalindrome(i, i);
        countPalindrome(i, i + 1);
    }

    return count;
}

module.exports = longestPalindrome;