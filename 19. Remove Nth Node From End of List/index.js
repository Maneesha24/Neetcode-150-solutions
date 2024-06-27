const ListNode = require("../ListNode");

/**
 * @author maneeshavenigalla
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;

  let left = dummyNode;
  let right = head;

  while (n > 0) {
    right = right.next;
    n--;
  }

  while (right) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;

  return dummyNode.next;
};

module.exports = removeNthFromEnd;
