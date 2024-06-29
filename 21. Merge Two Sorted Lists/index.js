const ListNode = require("../ListNode");

/**
 * @author maneeshavenigalla
 * You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. 
 * The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  let resultNode = new ListNode(-1);
  let currentNode = resultNode;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      currentNode.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      currentNode.next = new ListNode(list2.val);
      list2 = list2.next;
    }

    currentNode = currentNode.next;
  }

  currentNode.next = list1 || list2;

  return resultNode.next;
};

module.exports = mergeTwoLists;
