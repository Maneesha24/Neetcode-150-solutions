const ListNode = require("../ListNode");

/**
 * @author maneeshavenigalla
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
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
