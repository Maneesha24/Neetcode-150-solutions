/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
 * This path may or may not pass through the root. The length of a path between two nodes is represented by the number of edges between them.
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let result = 0;

  const traverse = (node) => {
    if (!node) {
      return 0;
    }

    const left = traverse(node.left);
    const right = traverse(node.right);

    const total = left + right;
    result = Math.max(result, total);
    return Math.max(left, right) + 1;
  };

  traverse(root);
  return result;
};

module.exports = diameterOfBinaryTree;
