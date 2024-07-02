const MinHeap = require("../MinHeap");

/**
 * @author maneeshavenigalla
 * You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges 
 * times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel 
 * from source to target. We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive 
 * the signal. If it is impossible for all the n nodes to receive the signal, return -1.
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const networkDelayTime = (times, n, k) => {

    let edges = {};

    for (const [source, target, time] of times) {
        if (source in edges) {
            edges[source].push([target, time]);
        } else {
            edges[source] = [[target, time]];
        }
    }

    let result = 0;
    let minHeap = new MinHeap();
    minHeap.add([0, k]);

    let visited = new Set();

    while (minHeap.size() > 0) {
        let [time1, target1] = minHeap.remove();

        if (visited.has(target1)) {
            continue;
        }

        visited.add(target1);
        result = time1;

        if (target1 in edges) {
            for (const [target2, time2] of edges[target1]) {
                if (!visited.has(target2)) {
                    minHeap.add([time2 + time1, target2]);
                }
            }
        }
    }

    if (visited.size !== n) {
        return -1;
    }

    return result;


};

module.exports = networkDelayTime;


