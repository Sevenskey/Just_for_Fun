var isPalindrome = function (head) {
  if (! head.next) {
    return true;
  }
  if (! head) {
    return true;
  }
  let a = head, b = head;
  let t = a;
  while (b !== null) {
    t = a;
    a = a.next;
    b = b.next;
    if (b) {
      b = b.next;
    }
  }
  t.next = null;
  b = head;
  a = reverse(a);
  console.log(a)
  while (a !== null) {
    if (a.val !== b.val) {
      return false;
    }
    a = a.next;
    b = b.next;
  }
  return true;
}

function reverse (head) {
  let prev = null;
  let cur = head;
  while (head !== null) {
    cur = head;
    head = head.next;
    cur.next = prev;
    prev = cur;
  }
  return cur;
}

function node (val) {
  this.val = val;
  this.next = null;
}

const a = new node(1);
a.next = new node(2);

const b = new node(1);
b.next = new node(2);
b.next.next = new node(3);
b.next.next.next = new node(2);
b.next.next.next.next = new node (1);

console.log(isPalindrome(a))
console.log(isPalindrome(b))
