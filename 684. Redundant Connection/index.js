/**
 * @author maneeshavenigalla
 * In this problem, a tree is an undirected graph that is connected and has no cycles. 
 * You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional 
 * edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that 
 * already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] 
 * indicates that there is an edge between nodes ai and bi in the graph. Return an edge that can be 
 * removed so that the resulting graph is a tree of n nodes. If there are multiple answers, 
 * return the answer that occurs last in the input.
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantConnection = (edges) => {
    const parent = new Array(edges.length + 1).fill(0).map((_, i) => i);
    const rank = new Array(edges.length + 1).fill(1);

    const find = (node) => {
        let p = parent[node];

        while (p != parent[p]) {
            parent[p] = parent[parent[p]];
            p = parent[p];
        }

        return p;
    }

    const checkUnion = (node1, node2) => {
        const parent1 = find(node1);
        const parent2 = find(node2);

        if (parent1 === parent2) {
            return false;
        }

        if (rank[parent1] > rank[parent2]) {
            parent[parent2] = parent1;
            rank[parent1] += rank[parent2];
        } else {
            parent[parent1] = parent2;
            rank[parent2] += rank[parent1];
        }


        return true;
    }

    for (const [node1, node2] of edges) {
        if (!checkUnion(node1, node2)) {
            return [node1, node2];
        }
    }

    return [];
};

module.exports = findRedundantConnection;