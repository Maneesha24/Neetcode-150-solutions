const mergeTwoLists = require("./index.js");
const ListNode = require("../ListNode");

test("should pass the test cases", () => {
  let l1 = new ListNode(1);
  l1.next = new ListNode(2);
  l1.next.next = new ListNode(4);
  let l2 = new ListNode(1);
  l2.next = new ListNode(3);
  l2.next.next = new ListNode(4);
  expect(mergeTwoLists(l1, l2)).toEqual({
    next: {
      next: {
        next: { next: { next: { next: null, val: 4 }, val: 4 }, val: 3 },
        val: 2,
      },
      val: 1,
    },
    val: 1,
  });

  let l3 = new ListNode();
  let l4 = new ListNode();
  expect(mergeTwoLists(l3, l4)).toEqual({
    next: { next: null, val: undefined },
    val: undefined,
  });
});
