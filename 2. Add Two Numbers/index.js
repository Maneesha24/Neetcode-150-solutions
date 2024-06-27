const ListNode = require("../ListNode.js");

/**
 * @author maneeshavenigalla
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each
 * of their nodes contains a single digit.  Add the two numbers and return the sum as a linked list.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let resultNode = new ListNode(-1);
  let currentNode = resultNode;

  let sum = 0;
  let carry = 0;

  while (l1 || l2 || sum > 0) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    sum = sum % 10;

    currentNode.next = new ListNode(sum);
    currentNode = currentNode.next;

    sum = carry;
    carry = 0;
  }

  return resultNode.next;
};

module.exports = addTwoNumbers;
