function ListNode(x) {
  this.val = x;
  this.next = null;
}

function printListFromTailToHead(head) {
  const r = [];

  function handler(node) {
    if (node === null) {
      return;
    }
    handle(node.next);
    r.push(node.val);
  }

  return r;
}

