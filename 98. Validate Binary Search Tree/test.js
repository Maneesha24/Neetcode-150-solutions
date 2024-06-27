const isValidBST = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass the test cases", () => {
  let root1 = new TreeNode(2);
  root1.left = new TreeNode(1);
  root1.right = new TreeNode(3);
  expect(isValidBST(root1)).toBe(true);
});
