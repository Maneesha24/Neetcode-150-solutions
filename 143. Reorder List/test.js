const reorderList = require("./index.js");
const ListNode = require("../ListNode.js");

test("should pass the test cases", () => {
  let l1 = new ListNode(1);
  l1.next = new ListNode(2);
  l1.next.next = new ListNode(3);
  l1.next.next.next = new ListNode(4);
  l1.next.next.next.next = new ListNode(5);
  expect(reorderList(l1)).toEqual({
    next: {
      next: { next: { next: { next: null, val: 3 }, val: 4 }, val: 2 },
      val: 5,
    },
    val: 1,
  });

  let l2 = new ListNode(1);
  l2.next = new ListNode(2);
  l2.next.next = new ListNode(3);
  l2.next.next.next = new ListNode(4);
  expect(reorderList(l2)).toEqual({
    next: { next: { next: { next: null, val: 3 }, val: 2 }, val: 4 },
    val: 1,
  });
});
