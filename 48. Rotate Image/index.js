/**
 * @author maneeshavenigalla
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees
 * (clockwise). You have to rotate the image in-place, which means you have to modify the input
 * 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const rotate = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  return matrix.map((row) => row.reverse());
};

module.exports = rotate;
