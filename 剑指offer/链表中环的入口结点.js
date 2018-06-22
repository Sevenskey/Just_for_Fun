function ListNode(x) {
  this.val = x;
  this.next = null;
}

function EntryNodeOfLoop(pHead) {
  if (pHead === null) {
    return null;
  }
  let a = pHead;
  let b = pHead;
  while (true) {
    a = a.next;
    if (a === null) {
      return null;
    }
    b = b.next.next;
    if (b === null) {
      return null;
    }
    if (a === b) {
      if (a === pHead) {
        return pHead;
      }
      a = pHead;
      break;
    }
  }
  while (true) {
    a = a.next;
    b = b.next;
    if (a === b) {
      return a;
    }
  }
}

/*** Test ***/
const a = new ListNode('a');
const z = new ListNode('z');
a.next = new ListNode(1);
a.next.next = new ListNode(2);
a.next.next.next = new ListNode(3);
a.next.next.next.next = z;
z.next = a;

console.log(EntryNodeOfLoop(a))
