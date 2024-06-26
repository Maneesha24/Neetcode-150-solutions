/**
 * @author maneeshavenigalla
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  for (let i = 0; i < 9; i++) {
    let rowSet = new Set();
    let columnSet = new Set();
    let cellSet = new Set();

    for (let j = 0; j < 9; j++) {
      let row = board[i][j];
      let column = board[j][i];
      let cell =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (row !== ".") {
        if (rowSet.has(row)) {
          return false;
        }
        rowSet.add(row);
      }

      if (column !== ".") {
        if (columnSet.has(column)) {
          return false;
        }
        columnSet.add(column);
      }

      if (cell !== ".") {
        if (cellSet.has(cell)) {
          return false;
        }
        cellSet.add(cell);
      }
    }
  }

  return true;
};

module.exports = isValidSudoku;
