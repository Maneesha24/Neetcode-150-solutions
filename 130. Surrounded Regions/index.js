/**
 * @author maneeshavenigalla
 * You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:
 * Connect: A cell is connected to adjacent cells horizontally or vertically
 * Region: To form a region connect every 'O' cell
 * Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
 * A surrounded region is captured by replacing all 'O's with 'X's in the input matrix board.
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = (board) => {

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (
                board[i][j] === 'O' &&
                (i === 0 || j === 0 || i === board.length - 1 || j === board[0].length - 1)
            ) {
                capture(board, i, j);
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'T') {
                board[i][j] = 'O';
            }
        }
    }

    return board;
};

const capture = (board, i, j) => {

    if (i < 0 || j < 0 || i === board.length || j === board[0].length || board[i][j] !== 'O') {
        return;
    }
    board[i][j] = 'T';
    capture(board, i + 1, j);
    capture(board, i - 1, j);
    capture(board, i, j + 1);
    capture(board, i, j - 1);
}

module.exports = solve;