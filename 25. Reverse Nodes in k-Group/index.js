const ListNode = require("../ListNode");

/**
 * @author maneeshavenigalla
 * Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
 * k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes
 * is not a multiple of k then left-out nodes, in the end, should remain as it is.
 * You may not alter the values in the list's nodes, only nodes themselves may be changed.
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = (head, k) => {
  const dummyNode = new ListNode(-1);
  dummyNode.next = head;

  let groupPrev = dummyNode;

  while (true) {
    let kthNode = getKthNode(groupPrev, k);

    if (!kthNode) {
      break;
    }

    let groupNext = kthNode.next;

    let prev = kthNode.next;
    let node = groupPrev.next;

    while (node != groupNext) {
      let temp = node.next;
      node.next = prev;
      prev = node;
      node = temp;
    }

    let temp = groupPrev.next;
    groupPrev.next = kthNode;
    groupPrev = temp;
  }

  return dummyNode.next;
};

const getKthNode = (current, k) => {
  while (current && k > 0) {
    k--;
    current = current.next;
  }

  return current;
};

module.exports = reverseKGroup;
