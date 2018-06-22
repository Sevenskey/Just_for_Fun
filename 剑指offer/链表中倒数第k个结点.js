function ListNode(x) {
  this.val = x;
  this.next = null;
}
function FindKthTail(head, k) {
  if (head === null) {
    return null;
  }
  let a = head;
  let b = head;
  let count = k - 1;
  while (b.next !== null && count !== 0) {
    b = b.next;
    count--;
  }
  if (count !== 0) {
    return null;
  }
  while (b.next != null) {
    a = a.next;
    b = b.next;
  }
  return a;
}

/*** Test ***/
const e = [1, 2, 3, 4, 5];
const head = new ListNode(e[0]);
let c = head;
for (let i = 1; i < e.length; i++) {
  c.next = new ListNode(e[i]);
  c = c.next;
}
console.log(FindKthTail(head, 1).val === 5);
console.log(FindKthTail(head, 5).val === 1);
console.log(FindKthTail(head, 3).val === 3);
console.log(FindKthTail(head, 6) === null);
console.log(FindKthTail(null, 6) === null);
