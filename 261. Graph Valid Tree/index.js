/**
 * @author maneeshavenigalla
 * You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi]
 * indicates that there is an undirected edge between nodes ai and bi in the graph. Return true if the edges of the given graph
 * make up a valid tree, and false otherwise.
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
const validTree = (n, edges) => {
  let graphObj = {};

  for (let i = 0; i < n; i++) {
    graphObj[i] = [];
  }

  for (const [node1, node2] of edges) {
    graphObj[node1].push(node2);
    graphObj[node2].push(node1);
  }

  const visited = new Set();

  const hasCycle = (node, parent) => {
    visited.add(node);

    for (const nei of graphObj[node]) {
      if (!visited.has(nei)) {
        if (hasCycle(nei, node)) {
          return true;
        }
      } else {
        if (nei !== parent) {
          return true;
        }
      }
    }
  };

  if (hasCycle(0, -1)) {
    return false;
  }

  return visited.size === n;
};

module.exports = validTree;
