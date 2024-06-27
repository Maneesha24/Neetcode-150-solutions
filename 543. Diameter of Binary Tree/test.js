const diameterOfBinaryTree = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass the test cases", () => {
  let head1 = new TreeNode(1);
  head1.left = new TreeNode(2);
  head1.right = new TreeNode(3);
  head1.left.left = new TreeNode(4);
  head1.left.right = new TreeNode(5);
  expect(diameterOfBinaryTree(head1)).toBe(3);

  let head2 = new TreeNode(1);
  head2.left = new TreeNode(2);
  expect(diameterOfBinaryTree(head2)).toBe(1);
});
