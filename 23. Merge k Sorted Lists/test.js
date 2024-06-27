const mergeKLists = require("./index.js");
const ListNode = require("../ListNode");

test("should pass all test conditions", () => {
  let list1 = new ListNode(1);
  list1.next = new ListNode(4);
  list1.next.next = new ListNode(5);

  let list2 = new ListNode(1);
  list2.next = new ListNode(3);
  list2.next.next = new ListNode(4);

  let list3 = new ListNode(2);
  list3.next = new ListNode(6);
  expect(mergeKLists([list1, list2, list3])).toEqual({
    next: {
      next: {
        next: {
          next: {
            next: { next: { next: { next: null, val: 6 }, val: 5 }, val: 4 },
            val: 4,
          },
          val: 3,
        },
        val: 2,
      },
      val: 1,
    },
    val: 1,
  });

  let list4 = new ListNode();
  expect(mergeKLists([list4])).toEqual({ next: null, val: undefined });
});
