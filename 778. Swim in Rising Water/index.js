const MinHeap = require("../MinHeap");

/**
 * You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j). 
 * The rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from a square to another 4-directionally 
 * adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distances in zero time. 
 * Of course, you must stay within the boundaries of the grid during your swim.  Return the least time until you can reach the bottom right square 
 * (n - 1, n - 1) if you start at the top left square (0, 0).
 * @param {number[][]} grid
 * @return {number}
 */
const swimInWater = (grid) => {
    const moves = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    const minHeap = new MinHeap();
    const n = grid.length - 1;
    
    let ans = grid[0][0];
    let i = 0;
    let j = 0;

    while (i < n || j < n) {
        for (const [a, b] of moves) {
            const ia = i + a;
            const jb = j + b;
            if (ia < 0 || ia > n || jb < 0 || jb > n || grid[ia][jb] > 2500) {
                continue;
            }
            minHeap.add((grid[ia][jb] << 12) + (ia << 6) + jb)
            grid[ia][jb] = 3000
        }
        let next = minHeap.remove();
        ans = Math.max(ans, next >> 12);
        i = (next >> 6) & ((1 << 6) - 1);
        j = next & ((1 << 6) - 1);
    }
    return ans;

};

module.exports = swimInWater;