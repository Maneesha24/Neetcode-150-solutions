const maxPathSum = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  expect(maxPathSum(root)).toStrictEqual(6);

  let root2 = new TreeNode(-10);
  root2.left = new TreeNode(9);
  root2.right = new TreeNode(20);
  root2.right.left = new TreeNode(15);
  root2.right.right = new TreeNode(7);
  expect(maxPathSum(root2)).toStrictEqual(42);
});
