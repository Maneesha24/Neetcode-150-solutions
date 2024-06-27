const copyRandomList = require("./index.js");
const ListNode = require("../ListNode.js");

test("should pass the test cases", () => {
  let l1 = new ListNode(1);
  l1.next = new ListNode(2);
  l1.next.next = new ListNode(3);
  expect(copyRandomList(l1)).toEqual({
    val: 1,
    next: {
      val: 2,
      next: { val: 3, next: null, random: null },
      random: null,
    },
    random: null,
  });

  let l2 = new ListNode(1);
  expect(copyRandomList(l2)).toEqual({ next: null, random: null, val: 1 });

  let l3 = new ListNode(1);
  l3.next = new ListNode(2);
  expect(copyRandomList(l3)).toEqual({
    val: 1,
    next: { val: 2, next: null, random: null },
    random: null,
  });
});
