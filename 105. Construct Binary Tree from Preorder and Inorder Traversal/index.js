const TreeNode = require("../TreeNode");

/**
 * @author maneeshavenigalla
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and
 * inorder is the inorder traversal of the same tree, construct and return the binary tree.
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
  if (!preorder.length || !inorder.length) {
    return null;
  }

  const root = new TreeNode(preorder[0]);
  const mid = inorder.indexOf(preorder[0]);

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid + 1));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
};

module.exports = buildTree;
