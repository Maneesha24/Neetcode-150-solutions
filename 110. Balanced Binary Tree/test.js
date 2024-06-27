const isBalanced = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
  let root = new TreeNode(3);
  root.left = new TreeNode(9);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);
  expect(isBalanced(root)).toStrictEqual(true);

  let root2 = new TreeNode(1);
  root2.left = new TreeNode(2);
  root2.right = new TreeNode(2);
  root2.left.left = new TreeNode(3);
  root2.left.right = new TreeNode(3);
  root2.left.left.left = new TreeNode(4);
  root2.left.left.right = new TreeNode(4);
  expect(isBalanced(root2)).toStrictEqual(false);

  let root3 = new TreeNode();
  expect(isBalanced(root3)).toStrictEqual(true);
});
