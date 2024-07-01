/**
 * @author maneeshavenigalla
 * Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
 * An interleaving of two strings s and t is a configuration where s and t are divided into n and m substrings respectively, such that:
 * s = s1 + s2 + ... + s
 * t = t1 + t2 + ... + t
 * Note: a + b is the concatenation of strings a and b.
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
const isInterleave = (s1, s2, s3) => {
    if (s1.length + s2.length !== s3.length) {
        return false;
    }

    let dp = Array.from({ length: s1.length + 1 }, () => new Array(s2.length + 1).fill(false));
    dp[s1.length][s2.length] = true;


    for (let i = s1.length; i >= 0; i--) {
        for (let j = s2.length; j >= 0; j--) {
            if (i < s1.length && s1[i] === s3[i + j] && dp[i + 1][j]) {
                dp[i][j] = true;
            }

            if (i < s2.length && s2[i] === s3[i + j] && dp[i][j + 1]) {
                dp[i][j] = true;
            }
        }
    }


    return dp[0][0];
};

module.exports = isInterleave;