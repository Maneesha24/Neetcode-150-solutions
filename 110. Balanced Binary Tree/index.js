/**
 * @author maneeshavenigalla
 * Given a binary tree, determine if it is height-balanced.
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = (root) => {
  const checkBalance = (node) => {
    if (!node) {
      return {
        height: 0,
        balanced: true,
      };
    }

    const left = checkBalance(node.left);
    if (!left.balanced) {
      return left;
    }

    const right = checkBalance(node.right);
    if (!right.balanced) {
      return right;
    }

    if (Math.abs(left.height - right.height) > 1) {
      return {
        balanced: false,
        height: -1,
      };
    }

    return {
      balanced: true,
      height: Math.max(left.height, right.height) + 1,
    };
  };

  return checkBalance(root).balanced;
};

module.exports = isBalanced;
