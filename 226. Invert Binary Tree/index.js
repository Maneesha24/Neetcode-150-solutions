/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, invert the tree, and return its root.
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = (node) => {
  if (!node) {
    return null;
  }

  const temp = node.left;
  node.left = invertTree(node.right);
  node.right = invertTree(temp);

  return node;
};

var invertTree = (node) => {
  if (!node) {
    return null;
  }

  let queue = [node];

  while (queue.length) {
    let node = queue.shift();

    let temp = node.left || null;
    node.left = node.right || null;
    node.right = temp;

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return node;
};

module.exports = invertTree;
