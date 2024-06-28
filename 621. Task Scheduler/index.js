const MaxHeap = require("../MaxHeap");

/**
 * @author maneeshavenigalla
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = (tasks, n) => {
  const taskFreq = new Array(26).fill(0);

  for (let task of tasks) {
    taskFreq[task.charCodeAt(0) - "A".charCodeAt(0)]++;
  }

  const maxHeap = new MaxHeap();
  for (let freq of taskFreq) {
    if (freq > 0) {
      maxHeap.add(freq);
    }
  }

  let cycles = 0;

  while (maxHeap.size() > 0) {
    let queue = [];
    let cooldown = n + 1;

    while (cooldown > 0 && maxHeap.size() > 0) {
      let maxFreq = maxHeap.remove();
      cycles++;

      if (maxFreq > 1) {
        queue.push(maxFreq - 1);
      }
      cooldown--;
    }

    for (let freq of queue) {
      maxHeap.add(freq);
    }

    if (maxHeap.size() > 0) {
      cycles += cooldown;
    }
  }

  return cycles;
};

module.exports = leastInterval;
