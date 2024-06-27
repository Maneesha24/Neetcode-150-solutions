/**
 * @author maneeshavenigalla
 * A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them.
 * A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.
 * The path sum of a path is the sum of the node's values in the path. Given the root of a binary tree, return the maximum path sum of any non-empty path.
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = (root) => {
  let result = -Infinity;

  const getSum = (node) => {
    if (!node) {
      return 0;
    }

    let left = Math.max(getSum(node.left), 0);
    let right = Math.max(getSum(node.right), 0);
    const total = node.val + left + right;

    result = Math.max(total, result);
    return node.val + Math.max(left, right);
  };

  getSum(root);
  return result;
};

module.exports = maxPathSum;
