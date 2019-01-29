function ListNode (x) {
  this.val = x;
  this.next = null;
}

/* 只适用于无环链表 */
function FindFirstCommonNode (pHead1, pHead2) {
  let a = pHead1, b = pHead2;
  while (a !== b) {
    a = a === null ? pHead2 : a.next;
    b = b === null ? pHead1 : b.next;
  }
  return a;
}

/* test */
const a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);
a.next.next.next = new ListNode(4);
const b = new ListNode(6);
b.next = a.next;

console.log(FindFirstCommonNode(a, b))
