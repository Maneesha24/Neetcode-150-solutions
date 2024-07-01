/**
 * @author maneeshavenigalla
 * Given a string s, return the longest palindromic substring in s.
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {

    let longest = "";

    const getPalindrome = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        return s.substring(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        let odd = getPalindrome(i, i);
        let even = getPalindrome(i, i + 1);

        if (longest.length < odd.length) {
            longest = odd;
        }

        if (longest.length < even.length) {
            longest = even;
        }
    }

    return longest;
}

module.exports = longestPalindrome;