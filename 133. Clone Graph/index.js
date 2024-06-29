const GraphNode = require("../GraphNode");

/**
 * @author maneeshavenigalla
 * Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph.
 * Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = (node) => {
  if (!node) {
    return node;
  }

  const graphObj = {};

  const dfs = (node) => {
    if (node in graphObj) {
      return graphObj[node];
    }

    const newNode = new GraphNode(node.val);
    graphObj[node] = newNode;

    for (const nei of newNode.neighbors) {
      if (nei in graphObj) {
        newNode.neighbors.push(graphObj[nei]);
      } else {
        newNode.neighbors.push(dfs(nei));
      }
    }

    return newNode;
  };

  dfs(node);
  return graphObj[node];
};

module.exports = cloneGraph;
