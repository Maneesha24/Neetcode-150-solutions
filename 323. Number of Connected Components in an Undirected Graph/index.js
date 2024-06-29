/**
 * @author maneeshavenigalla
 * You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi]
 * indicates that there is an edge between ai and bi in the graph. Return the number of connected components in the graph.
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countComponents = (n, edges) => {
  let graphObj = {};

  for (let i = 0; i < n; i++) {
    graphObj[i] = [];
  }

  for (const [node1, node2] of edges) {
    graphObj[node1].push(node2);
    graphObj[node2].push(node1);
  }

  let count = 0;

  const visited = new Set();

  const dfs = (node) => {
    if (visited.has(node)) {
      return false;
    }

    visited.add(node);

    for (const nei of graphObj[node]) {
      dfs(nei);
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      count++;
      dfs(i);
    }
  }
  return count;
};

module.exports = countComponents;
