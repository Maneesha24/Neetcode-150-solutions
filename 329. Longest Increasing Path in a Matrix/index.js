/**
 * @author maneeshavenigalla
 * Given an m x n integers matrix, return the length of the longest increasing path in matrix. From each cell, you can either move 
 * in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).
 * @param {number[][]} matrix
 * @return {number}
 */
const longestIncreasingPath = (matrix) => {

    let longest = 0;

    let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let dp = Array.from({ length: matrix.length }, () => new Array(matrix[0].length).fill(0));

    const dfs = (i, j, prev) => {
        if (i < 0 || i === matrix.length || j < 0 || j === matrix[0].length || matrix[i][j] <= prev) {
            return 0;
        }

        if (dp[i][j] !== 0) {
            return dp[i][j];
        }

        let result = 1;

        for (const [dx, dy] of dirs) {
            let x = i + dx;
            let y = j + dy;

            if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length && matrix[x][y] > prev) {
                result = Math.max(result, 1 + dfs(x, y, matrix[i][j]))
            }
        }

        dp[i][j] = result;
        return result;

    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            longest = Math.max(longest, dfs(i, j, -1));
        }
    }

    return longest;

};

module.exports = longestIncreasingPath;