/**
 * @author maneeshavenigalla
 * A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that: 
 * Every adjacent pair of words differs by a single letter 
 * Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList sk == endWord
 * Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an empty list if 
 * no such sequence exists. Each sequence should be returned as a list of the words [beginWord, s1, s2, ..., sk].
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
const findLadders = (beginWord, endWord, wordList) => {
    if (!wordList.includes(endWord)) {
        return 0;
    }

    const dp = {};
    wordList.push(beginWord);

    for (const word of wordList) {
        for (let j = 0; j < word.length; ++j) {
            const pattern =
                word.substring(0, j) + '*' + word.substring(j + 1);
            if (!dp[pattern]) {
                dp[pattern] = [];
            }
            dp[pattern].push(word);
        }
    }

    const visit = new Set([beginWord]);
    const queue = [beginWord];
    let result = 1;

    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; ++i) {
            const word = queue.shift();
            if (word === endWord) {
                return result;
            }
            for (let j = 0; j < word.length; ++j) {
                const pattern =
                    word.substring(0, j) + '*' + word.substring(j + 1);
                for (const neiWord of dp[pattern]) {
                    if (!visit.has(neiWord)) {
                        visit.add(neiWord);
                        queue.push(neiWord);
                    }
                }
            }
        }
        result++;
    }
    return 0;
};

module.exports = findLadders;