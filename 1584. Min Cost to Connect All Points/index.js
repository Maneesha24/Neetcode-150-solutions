const MinHeap = require("../MinHeap");

/**
 * @author maneeshavenigalla
 * You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi]. 
 * The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.
 * Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.
 * @param {number[][]} points
 * @return {number}
 */
const minCostConnectPoints = (points) => {

    let adjacencyList = {};

    for (let i = 0; i < points.length; i++) {
        adjacencyList[i] = [];
    }

    for (let i = 0; i < points.length; i++) {
        const [x1, y1] = points[i];

        for (let j = i + 1; j < points.length; j++) {
            const [x2, y2] = points[j];

            let dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
            adjacencyList[i].push([dist, j]);
            adjacencyList[j].push([dist, i]);
        }
    }

    let result = 0;
    let visited = new Set();

    let minHeap = new MinHeap();
    minHeap.add([0, 0]);

    while (visited.size < points.length) {
        let [cost, i] = minHeap.remove();

        if (visited.has(i)) {
            continue;
        }

        result += cost;
        visited.add(i);

        for (const [neiCost, nei] of adjacencyList[i]) {
            if (!visited.has(nei)) {
                minHeap.add([neiCost, nei]);
            }
        }
    }

    return result;

};

module.exports = minCostConnectPoints;