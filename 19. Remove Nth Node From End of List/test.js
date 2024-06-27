const removeNthFromEnd = require("./index.js");
const ListNode = require("../ListNode.js");

test("should pass the test cases", () => {
  let l1 = new ListNode(1);
  l1.next = new ListNode(2);
  l1.next.next = new ListNode(3);
  l1.next.next.next = new ListNode(4);
  l1.next.next.next.next = new ListNode(5);
  expect(removeNthFromEnd(l1, 2)).toEqual({
    next: { next: { next: { next: null, val: 5 }, val: 3 }, val: 2 },
    val: 1,
  });

  let l2 = new ListNode(1);
  expect(removeNthFromEnd(l2, 1)).toEqual(null);

  let l3 = new ListNode(1);
  l3.next = new ListNode(2);
  expect(removeNthFromEnd(l3, 1)).toEqual({ next: null, val: 1 });
});
