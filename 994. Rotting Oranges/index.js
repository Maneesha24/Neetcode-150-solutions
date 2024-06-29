/**
 * @author maneeshavenigalla
 * You are given an m x n grid where each cell can have one of three values:
 * 0 representing an empty cell
 * 1 representing a fresh orange, o
 * 2 representing a rotten orange
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
 * @param {character[][]} grid is the input array
 * @return {number} is the number of islands
 */
const orangesRotting = (grid) => {

    let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let minutes = 0;

    let freshOranges = 0;

    let queue = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                freshOranges++;
            } else if (grid[i][j] === 2) {
                queue.push([i, j, 0])
            }
        }
    }

    while (queue.length > 0) {
        let [i, j, min] = queue.shift();
        minutes = min;

        for (const [dx, dy] of dirs) {
            let x = i + dx;
            let y = j + dy;

            if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] === 1) {
                grid[x][y] = 2;
                freshOranges--;
                queue.push([x, y, min + 1]);
            }
        }

    }

    return freshOranges === 0 ? minutes : -1;
};
module.exports = orangesRotting;