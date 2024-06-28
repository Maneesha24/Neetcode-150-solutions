const TrieNode = require("../TrieNode");

/**
 * @author maneeshavenigalla
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve
 * keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
 */
var Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let current = this.root;
  for (const char of word) {
    if (!(char in current.children)) {
      current.children[char] = new TrieNode(char);
    }

    current = current.children[char];
  }

  current.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let current = this.root;
  for (const char of word) {
    if (!(char in current.children)) {
      return false;
    }

    current = current.children[char];
  }

  return current.endOfWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let current = this.root;
  for (const char of prefix) {
    if (!(char in current.children)) {
      return false;
    }

    current = current.children[char];
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
module.exports = Trie;
