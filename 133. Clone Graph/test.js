const GraphNode = require("../GraphNode.js");
const cloneGraph = require("./index.js");

test("should pass all test conditions", () => {
  let node1 = new GraphNode(1);
  let node2 = new GraphNode(2);
  let node3 = new GraphNode(3);
  let node4 = new GraphNode(4);

  node1.neighbors = [node2, node4];
  node2.neighbors = [node1, node3];
  node3.neighbors = [node2, node4];
  node4.neighbors = [node1, node3];
  expect(cloneGraph(node1)).toBeTruthy();
});
