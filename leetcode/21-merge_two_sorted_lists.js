function ListNode (val) {
  this.val = val;
  this.next = null;
}
var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  const head = l1.val < l2.val ? l1 : l2;
  let current = head;
  l1 = l1 === head ? l1.next : l1;
  l2 = l2 === head ? l2.next : l2;
  while (l1 !== null || l2 !== null) {
    if (l1 === null) {
      current.next = l2;
      break;
    }
    if (l2 === null) {
      current.next = l1;
      break;
    }
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  return head;
}

