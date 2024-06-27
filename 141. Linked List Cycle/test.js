const hasCycle = require("./index.js");
const ListNode = require("../ListNode.js");

test("should pass the test cases", () => {
  let l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);
  expect(hasCycle(l1)).toBe(false);

  let l2 = new ListNode(0);
  expect(hasCycle(l2)).toBe(false);
});
