const MaxHeap = require("../MaxHeap");

/**
 * @author maneeshavenigalla
 * You are given an array of integers stones where stones[i] is the weight of the ith stone.
 * We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together.
 * Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:
 * If x == y, both stones are destroyed, and
 * If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
 * At the end of the game, there is at most one stone left.
 * Return the weight of the last remaining stone. If there are no stones left, return 0.
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = (stones) => {
  const maxHeap = new MaxHeap();
  for (const stone of stones) {
    maxHeap.push(stone);
  }

  while (maxHeap.size() !== 1) {
    let maxStone2 = maxHeap.pop();
    let maxStone1 = maxHeap.pop();

    if (maxStone1 !== maxStone2) {
      maxHeap.push(Math.abs(maxStone2 - maxStone1));
    }
  }

  return maxHeap.peek();
};

module.exports = lastStoneWeight;
