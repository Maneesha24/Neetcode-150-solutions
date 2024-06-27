const lowestCommonAncestor = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass the test cases", () => {
  let head1 = new TreeNode(6);
  head1.left = new TreeNode(2);
  head1.right = new TreeNode(8);
  head1.left.left = new TreeNode(0);
  head1.left.right = new TreeNode(4);
  head1.left.right.left = new TreeNode(3);
  head1.left.right.left.right = new TreeNode(5);
  head1.right.left = new TreeNode(7);
  head1.right.right = new TreeNode(9);
  expect(lowestCommonAncestor(head1, 2, 8)).toEqual({
    left: {
      left: { left: null, right: null, val: 0 },
      right: {
        left: {
          left: null,
          right: { left: null, right: null, val: 5 },
          val: 3,
        },
        right: null,
        val: 4,
      },
      val: 2,
    },
    right: {
      left: { left: null, right: null, val: 7 },
      right: { left: null, right: null, val: 9 },
      val: 8,
    },
    val: 6,
  });

  let head2 = new TreeNode(2);
  head2.left = new TreeNode(1);
  expect(lowestCommonAncestor(head2, 2, 1)).toEqual({
    left: { left: null, right: null, val: 1 },
    right: null,
    val: 2,
  });
});
