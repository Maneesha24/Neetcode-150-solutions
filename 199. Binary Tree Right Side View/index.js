/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, imagine yourself standing on the right side of it, return the
 * values of the nodes you can see ordered from top to bottom.
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = (root) => {
  const result = [];

  if (!root || !root.val) {
    return result;
  }

  const queue = [root];

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      if (i === size - 1) {
        result.push(node.val);
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return result;
};

module.exports = rightSideView;
