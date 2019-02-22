function ListNode(val) {
  this.val = val;
  this.next = null;
}

var removeNthFromEnd = function (head, n) {
  if (head.next === null) {
    return null;
  }
  let a = head, b = head;
  while (n > 1) {
    b = b.next;
    n--;
  }
  let c;
  while (b.next !== null) {
    c = a;
    a = a.next;
    b = b.next;
  }
  if (a === head) {
    return head.next;
  }
  c.next = a.next;
  return head;
}

