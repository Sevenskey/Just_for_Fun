function ListNode(val) {
  this.val = val;
  this.next = null;
}
var reverseList = function (head) {
  if (head === null) {
    return null;
  }
  let stack = [];
  while (head !== null) {
    stack.push(head);
    head = head.next;
  }
  head = stack.pop();
  let cur = head;
  while (stack.length !== 0) {
    cur.next = stack.pop();
    cur = cur.next;
  }
  cur.next = null;
  return head;
}

reverseList = function (head) {
  if (head === null) {
    return null;
  }
  let newHead;
  function handler (head) {
    if (!head.next) {
      newHead = head;
      return head;
    }
    let t = head.next;
    head.next = null;
    let n = handler(t);
    n.next = head;
    return n.next;
  }
  handler(head);
  return newHead;
}

const a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);
a.next.next.next = new ListNode(4);


let aa = reverseList(a);
const t = [];
while (aa) {
  t.push(aa.val);
  aa = aa.next;
}
console.log(t)
