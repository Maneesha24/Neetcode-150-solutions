/**
 * @author maneeshavenigalla
 * Given the root of a binary search tree, and an integer k, return the kth smallest
 * value (1-indexed) of all the values of the nodes in the tree.
 * Time complexity - O(N)
 * Space complexity - O(H) [height of tree]
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
  let count = 0;

  let stack = [];
  let current = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    count++;

    current = stack.pop();

    if (count === k) {
      return current.val;
    }

    current = current.right;
  }
};

module.exports = kthSmallest;
