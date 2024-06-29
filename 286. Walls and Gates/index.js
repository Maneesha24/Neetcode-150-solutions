/**
 * @author maneeshavenigalla
 * You are given an m x n grid rooms initialized with these three possible values. 
 * -1 A wall or an obstacle.
 * 0 A gate.
 * INF Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
 * Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
const wallsAndGates = (rooms) => {
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    let queue = [];

    for (let i = 0; i < rooms.length; i++) {
        for (let j = 0; j < rooms[0].length; j++) {
            if (rooms[i][j] === 0) {
                queue.push([i, j]);
            }
        }
    }

    while (queue.length) {
        let [x, y] = queue.shift();

        for (const [dx, dy] of directions) {
            let i = x + dx;
            let j = y + dy;

            if (
                i >= 0 &&
                i < rooms.length &&
                j >= 0 &&
                j < rooms[0].length &&
                rooms[i][j] === 2147483647
            ) {
                rooms[i][j] = rooms[x][y] + 1;
                queue.push([i, j]);
            }
        }
    }

    return rooms;
};

module.exports = wallsAndGates;