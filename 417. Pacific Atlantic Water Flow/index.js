/**
 * @author maneeshavenigalla
 * There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the
 * island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges. The island is partitioned
 * into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above
 * sea level of the cell at coordinate (r, c). The island receives a lot of rain, and the rain water can flow to neighboring
 * cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height.
 * Water can flow from any cell adjacent to an ocean into the ocean. Return a 2D list of grid coordinates result where
 * result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = (heights) => {
  let m = heights.length;
  let n = heights[0].length;

  let result = [];

  let visitedPacific = Array.from({ length: m }, () =>
    new Array(n).fill(false)
  );
  let visitedAtlantic = Array.from({ length: m }, () =>
    new Array(n).fill(false)
  );

  const canFlowBetweenOceans = (i, j) => {
    return visitedAtlantic[i][j] && visitedPacific[i][j];
  };

  const directions = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  const dfs = (i, j, ocean) => {
    ocean[i][j] = true;

    for (const [dr, dc] of directions) {
      const newRow = i + dr;
      const newCol = j + dc;

      if (
        newRow >= 0 &&
        newRow < m &&
        newCol >= 0 &&
        newCol < n &&
        !ocean[newRow][newCol] &&
        heights[newRow][newCol] >= heights[i][j]
      ) {
        dfs(newRow, newCol, ocean);
      }
    }
  };

  for (let i = 0; i < m; i++) {
    dfs(i, 0, visitedPacific);
    dfs(i, n - 1, visitedAtlantic);
  }

  for (let j = 0; j < n; j++) {
    dfs(0, j, visitedPacific);
    dfs(m - 1, j, visitedAtlantic);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (canFlowBetweenOceans(i, j)) {
        result.push([i, j]);
      }
    }
  }

  return result;
};

module.exports = pacificAtlantic;
