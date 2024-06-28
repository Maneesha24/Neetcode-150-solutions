const TrieNode = require("../TrieNode");

/**
 * @author maneeshavenigalla
 * Given an m x n board of characters and a list of strings words, return all words on the board.
 * Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically
 * neighboring. The same letter cell may not be used more than once in a word.
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (board, words) => {
  let result = [];
  let root = buildTree(words);

  const dfs = (node, i, j) => {
    if (node.word != null) {
      result.push(node.word);
      node.word = null;
    }

    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[0].length ||
      node[board[i][j]] == null
    ) {
      return;
    }

    const char = board[i][j];
    board[i][j] = "#";

    dfs(node[char], i + 1, j);
    dfs(node[char], i - 1, j);
    dfs(node[char], i, j + 1);
    dfs(node[char], i, j - 1);

    board[i][j] = char;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(root, i, j);
    }
  }

  return result;
};

const buildTree = (words) => {
  let root = {};

  for (const word of words) {
    let current = root;
    for (const char of word) {
      if (!(char in current)) {
        current[char] = new TrieNode();
      }

      current = current[char];
    }
    current.word = word;
  }

  return root;
};

module.exports = findWords;
