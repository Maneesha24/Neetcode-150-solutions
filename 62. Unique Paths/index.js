/**
 * @author maneeshavenigalla
 * There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]).
 * The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either
 * down or right at any point in time. Given the two integers m and n, return the number of possible unique paths
 * that the robot can take to reach the bottom-right corner.
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
    let path = Array.from({ length: m }, () => Array.from({ length: n }, () => []));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                path[i][j] = 1;
            } else {
                path[i][j] = path[i - 1][j] + path[i][j - 1];
            }
        }
    }

    return path[m - 1][n - 1];
}

module.exports = uniquePaths;