const TreeNode = require("../TreeNode");

/**
 * @author maneeshavenigalla
 * Encodes a tree to a single string.
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let result = "";

  const traverse = (node) => {
    if (!node) {
      result += "* ";
    } else {
      result += `${node.val} `;
      traverse(node.left);
      traverse(node.right);
    }
  };

  traverse(root);
  return result;
};

/**
 * Decodes your encoded data to tree.
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const nodes = data.split(" ");

  const buildTree = () => {
    const node = nodes.shift();

    if (node === "*") {
      return null;
    }

    const newNode = new TreeNode(node);
    newNode.left = buildTree();
    newNode.right = buildTree();

    return newNode;
  };

  return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

module.exports = { serialize, deserialize };
