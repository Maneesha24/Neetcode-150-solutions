const maxDepth = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
  let root1 = new TreeNode(3);
  root1.left = new TreeNode(9);
  root1.right = new TreeNode(20);
  root1.right.left = new TreeNode(15);
  root1.right.right = new TreeNode(7);
  expect(maxDepth(root1)).toStrictEqual(3);
});
