function ListNode(x) {
  this.val = x;
  this.next = null;
}

function Merge(pHead1, pHead2) {
  if (pHead1 === null && pHead2 === null) {
    return null;
  } else if (pHead1 === null) {
    return pHead2;
  } else if (pHead2 === null) {
    return pHead1;
  }
  let c1;
  let c2;
  let head;
  if (pHead1.val > pHead2.val) {
    head = pHead2;
    c1 = pHead1;
    c2 = pHead2.next;
  } else {
    head = pHead1;
    c1 = pHead1.next;
    c2 = pHead2;
  }
  let c = head;
  while (c !== null) {
    if (c1 === null) {
      c.next = c2;
      break;
    } else if (c2 === null) {
      c.next = c1;
      break;
    }
    if (c1.val > c2.val) {
      c.next = c2;
      c2 = c2.next;
    } else {
      c.next = c1;
      c1 = c1.next;
    }
    c = c.next;
  }
  return head;
}

/*** Test ***/
const a1 = [1, 3, 5, 7, 9];
const a2 = [2, 4, 6, 8];

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

const l1 = genList(a1);
const l2 = genList(a2);

console.log(ltList(Merge(l1, l2)));
