/**
 * @author maneeshavenigalla
 * You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) 
 * You may assume all four edges of the grid are surrounded by water.  The area of an island is the number of cells with a value 1 in the island.
 * Return the maximum area of an island in grid. If there is no island, return 0.
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = (grid) => {
    let maxArea = 0;

    const dfs = (i, j) => {
        if (
            i < 0 ||
            i >= grid.length ||
            j < 0 ||
            j >= grid[0].length ||
            grid[i][j] !== 1
        ) {
            return 0;
        }

        grid[i][j] = "*";
        let area = 1;

        area += dfs(i + 1, j);
        area += dfs(i - 1, j);
        area += dfs(i, j + 1);
        area += dfs(i, j - 1);

        return area;
    };

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                maxArea = Math.max(maxArea, dfs(i, j));
            }
        }
    }

    return maxArea;
};

module.exports = maxAreaOfIsland;