const addTwoNumbers = require("./index.js");
const ListNode = require("../ListNode.js");

test("should pass the test cases", () => {
  let l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);

  let l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);
  expect(addTwoNumbers(l1, l2)).toEqual({
    next: { next: { next: null, val: 8 }, val: 0 },
    val: 7,
  });

  let l3 = new ListNode(0);

  let l4 = new ListNode(0);
  expect(addTwoNumbers(l3, l4)).toEqual({ next: null, val: 0 });

  let l5 = new ListNode(9);
  l5.next = new ListNode(9);
  l5.next.next = new ListNode(9);
  l5.next.next.next = new ListNode(9);
  l5.next.next.next.next = new ListNode(9);
  l5.next.next.next.next.next = new ListNode(9);
  l5.next.next.next.next.next.next = new ListNode(9);

  let l6 = new ListNode(9);
  l6.next = new ListNode(9);
  l6.next.next = new ListNode(9);
  l6.next.next.next = new ListNode(9);
  expect(addTwoNumbers(l5, l6)).toEqual({
    next: {
      next: {
        next: {
          next: {
            next: {
              next: {
                next: {
                  next: null,
                  val: 1,
                },
                val: 0,
              },
              val: 0,
            },
            val: 0,
          },
          val: 9,
        },
        val: 9,
      },
      val: 9,
    },
    val: 8,
  });
});
