const MinHeap = require("../MinHeap");

/**
 * @author maneeshavenigalla
 * Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of 
 * groupSize consecutive cards. Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, 
 * return true if she can rearrange the cards, or false otherwise.
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
const isNStraightHand = (hand, groupSize) => {
    if (hand.length % groupSize !== 0) {
        return false;
    }

    let countObj = {};
    for (let num of hand) {
        if (num in countObj) {
            countObj[num] += 1;
        } else {
            countObj[num] = 1;
        }
    }

    let minHeap = new MinHeap();
    for (let num of hand) {
        minHeap.add(num);
    }

    while (minHeap.length > 0) {
        let first = minHeap.remove();

        for (let i = first; i < first + groupSize; i++) {

            if (!(i in countObj)) {
                return false;
            }
            countObj[i] -= 1;

            if (countObj[i] === 0) {

                delete countObj[i];
                if (i !== minHeap[0]) {
                    return false;
                }
                minHeap.remove();
            }
        }
    }

    return true;

};

module.exports = isNStraightHand;