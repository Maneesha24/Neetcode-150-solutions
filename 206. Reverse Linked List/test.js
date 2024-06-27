const reverseList = require("./index.js");
const ListNode = require("../ListNode.js");

test("should pass all test conditions", () => {
  let head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);
  expect(reverseList(head)).toEqual({
    next: {
      next: { next: { next: { next: null, val: 1 }, val: 2 }, val: 3 },
      val: 4,
    },
    val: 5,
  });

  let head2 = new ListNode(1);
  head2.next = new ListNode(2);
  expect(reverseList(head2)).toEqual({ next: { next: null, val: 1 }, val: 2 });

  let head3 = new ListNode();
  expect(reverseList(head3)).toEqual({ next: null, val: undefined });
});
