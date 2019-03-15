var sortList = function (head) {
  if (head === null) {
    return head;
  }
  if (head.next === null) {
    return head;
  }
  let a = b = head;
  let t;
  while (b !== null) {
    t = a;
    a = a.next;
    b = b.next;
    if (b) {
      b = b.next;
    }
  }
  t.next = null;
  return merge(sortList(head), sortList(a));
}

function merge (aHead, bHead) {
  let head;
  if (aHead.val < bHead.val) {
    head = aHead;
    aHead = aHead.next;
  } else {
    head = bHead;
    bHead = bHead.next;
  }
  let cur = head;
  while (aHead && bHead) {
    if (aHead.val < bHead.val) {
      cur.next = aHead;
      aHead = aHead.next;
    } else {
      cur.next = bHead;
      bHead = bHead.next;
    }
    cur = cur.next;
  }
  cur.next = aHead ? aHead : bHead;
  return head;
}

function node (val) {
  this.val = val;
  this.next = null;
}

const a = new node(1);
a.next = new node(4);
a.next.next = new node(3);
a.next.next.next = new node(2);
console.log(sortList(a));
