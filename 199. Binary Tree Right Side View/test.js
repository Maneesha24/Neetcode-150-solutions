const rightSideView = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
  let root1 = new TreeNode(1);
  root1.left = new TreeNode(2);
  root1.right = new TreeNode(3);
  root1.left.right = new TreeNode(5);
  root1.right.right = new TreeNode(4);
  expect(rightSideView(root1)).toStrictEqual([1, 3, 4]);

  let root2 = new TreeNode(1);
  root2.right = new TreeNode(3);
  expect(rightSideView(root2)).toStrictEqual([1, 3]);

  let root3 = new TreeNode();
  expect(rightSideView(root3)).toStrictEqual([]);
});
