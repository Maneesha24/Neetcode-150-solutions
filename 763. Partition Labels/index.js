/**
 * @author maneeshavenigalla
 * You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. 
 * Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s. 
 * Return a list of integers representing the size of these parts
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = (s) => {

    let result = [];
    let charObj = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        charObj[char] = i;
    }

    let currentLength = 0;
    let goal = 0;
    let i = 0;

    while (i < s.length) {
        goal = Math.max(goal, charObj[s[i]]);
        currentLength++;

        if (goal === i) {
            result.push(currentLength);
            currentLength = 0;
        }

        i++;
    }

    return result;

};

module.exports = partitionLabels;