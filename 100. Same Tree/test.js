const isSameTree = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
  let root1 = new TreeNode(1);
  root1.left = new TreeNode(2);
  root1.right = new TreeNode(3);

  let root2 = new TreeNode(1);
  root2.left = new TreeNode(2);
  root2.right = new TreeNode(3);
  expect(isSameTree(root1, root2)).toStrictEqual(true);

  let root3 = new TreeNode(1);
  root3.left = new TreeNode(2);

  let root4 = new TreeNode(1);
  root4.left = new TreeNode(1);
  expect(isSameTree(root3, root4)).toStrictEqual(false);

  let root5 = new TreeNode(1);
  root5.left = new TreeNode(2);
  root5.right = new TreeNode(1);

  let root6 = new TreeNode(1);
  root6.left = new TreeNode(1);
  root6.right = new TreeNode(2);
  expect(isSameTree(root5, root6)).toStrictEqual(false);
});
