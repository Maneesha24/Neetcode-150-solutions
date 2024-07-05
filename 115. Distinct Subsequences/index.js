/**
 * @author maneeshavenigalla
 * Given two strings s and t, return the number of distinct subsequences of s which equals t. The test 
 * cases are generated so that the answer fits on a 32-bit signed integer.
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct = (s, t) => {
    const cache = new Array(s.length + 1)
        .fill(0)
        .map(() => new Array(t.length + 1).fill(0));


    for (let i = 0; i <= s.length; i++) {
        cache[i][t.length] = 1;
    }

    for (let j = t.length - 1; j >= 0; j--) {
        cache[s.length][j] = 0;
    }

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = t.length - 1; j >= 0; j--) {
            if (s[i] === t[j]) {
                cache[i][j] = cache[i + 1][j + 1] + cache[i + 1][j]
            } else {
                cache[i][j] = cache[i + 1][j];
            }
        }
    }

    return cache[0][0];
};

module.exports = numDistinct;