const ListNode = require("../ListNode");

/**
 * @author maneeshavenigalla
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge
 * all the linked-lists into one sorted linked-list and return it.
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let root = lists[0];

  for (let i = 1; i < lists.length; i++) {
    root = merge(root, lists[i]);
  }

  return root;
};

const merge = (list1, list2) => {
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

module.exports = mergeKLists;
