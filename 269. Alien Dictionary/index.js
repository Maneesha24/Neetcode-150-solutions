/**
 * @author maneeshavenigalla
 * There is a new alien language that uses the English alphabet. However, the order of the letters is unknown to you.
 * You are given a list of strings words from the alien language's dictionary. Now it is claimed that the strings in words are
 * sorted lexicographically by the rules of this new language. If this claim is incorrect, and the given arrangement of string
 * in words cannot correspond to any order of letters, return "". Otherwise, return a string of the unique letters in the
 * new alien language sorted in lexicographically increasing order by the new language's rules. If there are multiple solutions, return any of them.
 * @param {string[]} words
 * @return {string}
 */
const alienOrder = (words) => {
    let adjacencyList = new Map();
    let indegreeMap = new Map();

    for (const word of words) {
        for (const char of word) {
            adjacencyList.set(char, new Set());
            indegreeMap.set(char, 0);
        }
    }

    for (let i = 0; i < words.length - 1; i++) {
        let currentWord = words[i];
        let nextWord = words[i + 1];
        let minLength = Math.min(currentWord.length, nextWord.length);

        for (let j = 0; j < words[i].length; j++) {

            for (let j = 0; j < minLength; j++) {
                let currentChar = currentWord[j];
                let nextChar = nextWord[j];

                if (currentChar != nextChar) {
                    if (!adjacencyList.get(currentChar).has(nextChar)) {
                        adjacencyList.get(currentChar).add(nextChar);
                        indegreeMap.set(nextChar, indegreeMap.get(nextChar) + 1);
                    }
                    break;
                }

                if (j === minLength - 1 && currentWord.length > nextWord.length) {
                    return "";
                }
            }
        }
    }

    const queue = [];
    for (const [char, indegree] of indegreeMap) {
        if (indegree === 0) {
            queue.push(char);
        }
    }

    let result = "";

    while (queue.length > 0) {
        let current = queue.shift();
        result += current;

        for (const nei of adjacencyList.get(current)) {
            indegreeMap.set(nei, indegreeMap.get(nei) - 1);

            if (indegreeMap.get(nei) === 0) {
                queue.push(nei);
            }
        }
    }

    return result;
}

module.exports = alienOrder