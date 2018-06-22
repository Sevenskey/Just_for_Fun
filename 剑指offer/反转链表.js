function ListNode(x) {
  this.val = x;
  this.next = null;
}
function ReverseList(pHead) {
  let c, rHead, n;
  rHead = null;
  c = null;
  n = pHead;
  while (n != null) {
    rHead = n;
    n = n.next;
    rHead.next = c;
    c = rHead;
  }

  return rHead;
}

/*** Test ***/
const a = [1, 2, 3, 4, 5];

function genList(a) {
  const head = new ListNode(a[0]);
  let c = head;
  for (let i = 1; i < a.length; i++) {
    c.next = new ListNode(a[i]);
    c = c.next;
  }
  return head;
}

function ltList(head) {
  const r = [];
  let c = head;
  while (c !== null) {
    r.push(c.val);
    c = c.next;
  }
  return r;
}

console.log(ReverseList(null));
console.log(ltList(ReverseList(genList(a))));
