/**
 * @author maneeshavenigalla
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 * It's important to note that the inner loop doesn't directly depend on the size of the input tree (N) for each iteration
 * Note that the time complexity is actually O(N^2) if we consider the fact that we use an array as a queue.
 * Calling Array.shift() takes O(N).
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
  const result = [];

  if (!root || !root.val) {
    return result;
  }

  const queue = [root];

  while (queue.length) {
    let size = queue.length;
    let level = [];

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }

      level.push(node.val);
    }

    result.push(level);
  }

  return result;
};

module.exports = levelOrder;
