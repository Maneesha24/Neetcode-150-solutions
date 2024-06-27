/**
 * @author maneeshavenigalla
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let node = head;
  let next = null;

  while (node) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  return prev;
};

module.exports = reverseList;
