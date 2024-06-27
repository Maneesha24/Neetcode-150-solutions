const invertTree = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass the test cases", () => {
  let head1 = new TreeNode(4);
  head1.left = new TreeNode(2);
  head1.right = new TreeNode(7);
  head1.left.left = new TreeNode(1);
  head1.left.right = new TreeNode(3);
  head1.right.left = new TreeNode(6);
  head1.right.right = new TreeNode(9);
  expect(invertTree(head1)).toEqual({
    left: {
      left: { left: null, right: null, val: 9 },
      right: { left: null, right: null, val: 6 },
      val: 7,
    },
    right: {
      left: { left: null, right: null, val: 3 },
      right: { left: null, right: null, val: 1 },
      val: 2,
    },
    val: 4,
  });

  let head2 = new TreeNode(2);
  head2.left = new TreeNode(1);
  head2.right = new TreeNode(3);
  expect(invertTree(head2)).toEqual({
    left: { left: null, right: null, val: 3 },
    right: { left: null, right: null, val: 1 },
    val: 2,
  });

  let head3 = new TreeNode();
  expect(invertTree(head3)).toEqual({
    left: null,
    right: null,
    val: undefined,
  });

  let head4 = new TreeNode(1);
  head4.left = new TreeNode(2);
  expect(invertTree(head4)).toEqual({
    left: null,
    right: { left: null, right: null, val: 2 },
    val: 1,
  });
});
