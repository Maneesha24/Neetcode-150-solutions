const ListNode = require("../ListNode");

/**
 * @author maneeshavenigalla
 * You are given the head of a singly linked-list. The list can be represented as:
 * L0 → L1 → … → Ln - 1 → Ln
 * Reorder the list to be on the following form:
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = (head) => {
  let middle = getMiddle(head);
  let reversedSecond = reverseList(middle.next);
  middle.next = null;

  let first = head;
  let second = reversedSecond;

  while (second) {
    let firstTemp = first.next;
    let secondTemp = second.next;

    first.next = second;
    second.next = firstTemp;

    first = firstTemp;
    second = secondTemp;
  }

  return head;
};

const reverseList = (head) => {
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

const getMiddle = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

module.exports = reorderList;
