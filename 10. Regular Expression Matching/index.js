/**
 * @author maneeshavenigalla
 * Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
 * '.' Matches any single character.​​​
 * '*' Matches zero or more of the preceding element
 * The matching should cover the entire input string (not partial).
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {

    let dp = new Array(s.length + 1).fill(false).map(() => new Array(p.length + 1).fill(false));
    dp[s.length][p.length] = true;

    for (let i = s.length; i >= 0; i--) {
        for (let j = p.length - 1; j >= 0; j--) {
            const match = i < s.length && (s[i] === p[j] || p[j] === ".");

            if (j + 1 < p.length && p[j + 1] === "*") {
                dp[i][j] = dp[i][j + 2];

                if (match) {
                    dp[i][j] = dp[i + 1][j] || dp[i][j];
                }
            } else if (match) {
                dp[i][j] = dp[i + 1][j + 1]
            }
        }
    }

    return dp[0][0];

};

module.exports = isMatch;