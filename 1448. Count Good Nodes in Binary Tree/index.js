/**
 * @author maneeshavenigalla
 * Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes
 * with a value greater than X. Return the number of good nodes in the binary tree.
 * @param {TreeNode} root
 * @return {number}
 */
const goodNodes = (root) => {
  if (!root) {
    return 0;
  }

  let count = 0;

  const dfs = (node, max) => {
    if (!node) {
      return;
    }

    if (node.val >= max) {
      count++;
    }

    max = Math.max(max, node.val);

    dfs(node.left, max);
    dfs(node.right, max);
  };

  dfs(root, root.val);
  return count;
};

module.exports = goodNodes;
