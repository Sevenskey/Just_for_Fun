function ListNode (x) {
  this.val = x;
  this.next = null;
}

/* 非递归解法 */
function _deleteDuplication(pHead) {
  let cur = pHead;
  let last = null;
  while (cur) {
    if (cur.next && (cur.val === cur.next.val)) {
      while (cur.next && (cur.val === cur.next.val)) {
        cur = cur.next;
      }
      cur = cur.next;
      if (cur === null) {
        if (last) {
          last.next = null;
        } else {
          pHead = null;
        }
        break;
      }
    } else {
      if (last) {
        last.next = cur;
        last = cur;
      } else {
        pHead = last = cur;
      }
      cur = cur.next;
    }
  }
  return pHead;
}

/* 递归解法 */
function deleteDuplication(pHead) {
  if (pHead === null) {
    return null;
  }
  if (pHead.next === null) {
    return pHead;
  }
  if (pHead.val === pHead.next.val) {
    let cur = pHead;
    while (cur.next && cur.val === cur.next.val) {
      cur = cur.next;
    }
    return deleteDuplication(cur.next);
  } else {
    pHead.next = deleteDuplication(pHead.next);
    return pHead;
  }
}

/* test */

const a = [ 2, 2, 3,  4,  5];
//const a = [2, 1, 1, 1, 1]
function genList(arr) {
  let root = new ListNode();
  let cur = root;
  let theLast;
  for (let i = 0; i < arr.length; i++) {
    cur.val = arr[i];
    if (i === arr.length - 1) {
      break;
    }
    cur.next = new ListNode();
    cur = cur.next;
  }
  return root;
}
function printList(list) {
  const r = [];
  let node = list;
  while (node) {
    r.push(node.val);
    node = node.next;
  }
  console.log(r);
}

const test = genList(a);
printList(test);

printList(deleteDuplication(test))
