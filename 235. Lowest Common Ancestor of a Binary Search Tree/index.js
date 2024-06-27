/**
 * @author maneeshavenigalla
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the
 * lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  let current = root;

  while (current) {
    if (current.val < p && current.val < q) {
      current = current.right;
    } else if (current.val > p && current.val > q) {
      current = current.left;
    } else {
      return current;
    }
  }
};

module.exports = lowestCommonAncestor;
