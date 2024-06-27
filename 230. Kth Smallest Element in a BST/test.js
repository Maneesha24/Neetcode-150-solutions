const kthSmallest = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass the test cases", () => {
  let root1 = new TreeNode(3);
  root1.left = new TreeNode(1);
  root1.right = new TreeNode(4);
  root1.left.right = new TreeNode(2);
  expect(kthSmallest(root1, 1)).toBe(1);

  let root2 = new TreeNode(5);
  root2.left = new TreeNode(3);
  root2.right = new TreeNode(6);
  root2.left.left = new TreeNode(2);
  root2.left.right = new TreeNode(4);
  root2.left.left.left = new TreeNode(1);
  expect(kthSmallest(root2, 3)).toBe(3);
});
