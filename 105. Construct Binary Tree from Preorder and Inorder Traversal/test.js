const buildTree = require("./index.js");
const TreeNode = require("../TreeNode.js");

test("should pass all test conditions", () => {
  let root1 = new TreeNode(3);
  root1.left = new TreeNode(9);
  root1.right = new TreeNode(20);
  root1.right.left = new TreeNode(15);
  root1.right.right = new TreeNode(7);
  expect(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])).toEqual({
    left: { left: null, right: null, val: 9 },
    right: {
      left: { left: null, right: null, val: 15 },
      right: { left: null, right: null, val: 7 },
      val: 20,
    },
    val: 3,
  });
});
