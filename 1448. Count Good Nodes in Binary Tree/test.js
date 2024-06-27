const goodNodes = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass the test cases", () => {
  let head1 = new TreeNode(3);
  head1.left = new TreeNode(1);
  head1.right = new TreeNode(4);
  head1.left.left = new TreeNode(3);
  head1.right.left = new TreeNode(1);
  head1.right.right = new TreeNode(5);
  expect(goodNodes(head1)).toBe(4);

  let head2 = new TreeNode(3);
  head2.left = new TreeNode(3);
  head2.left.left = new TreeNode(4);
  head2.left.right = new TreeNode(2);
  expect(goodNodes(head2)).toBe(3);

  let head3 = new TreeNode(1);
  expect(goodNodes(head3)).toBe(1);
});
