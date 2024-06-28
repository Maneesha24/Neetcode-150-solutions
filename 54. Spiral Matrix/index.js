/**
 * @author maneeshavenigalla
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix) => {
  let result = [];

  let startRow = 0,
    endRow = matrix.length - 1;

  let startCol = 0,
    endCol = matrix[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      result.push(matrix[startRow][i]);
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      result.push(matrix[i][endCol]);
    }
    endCol--;

    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i--) {
        result.push(matrix[endRow][i]);
      }
      endRow--;
    }

    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i--) {
        result.push(matrix[i][startCol]);
      }
      startCol++;
    }
  }

  return result;
};

module.exports = spiralOrder;
