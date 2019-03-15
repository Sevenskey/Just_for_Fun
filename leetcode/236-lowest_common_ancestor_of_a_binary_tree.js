var lowestCommonAncestor = function ( root, p, q) {
  let a = []
  let b = []
  infix(root, p, a);
  infix(root, q, b);
  let map = {};
  let i = 0;
  for (let i = 0; i < a.length; i++) {
    map[a[i].val] = 1;
  }
  for (let i = 0; i < b.length; i++) {
    if (map[b[i].val]) {
      return b[i];
    }
  }

  function infix (curNode, goal, arr) {
    if (curNode === null) {
      return false;
    }
    if (curNode.val === goal.val) {
      arr.push(curNode);
      return true;
    }
    let l = infix(curNode.left, goal, arr);
    let r = infix(curNode.right, goal, arr);
    if (l || r) {
      arr.push(curNode);
      return true;
    }
    return false;
  }
}

function node (val) {
  this.val = val;
  this.left = this.right = null;
}
const a = new node(3);
a.left = new node(5);
a.right = new node(1);
a.left.left = new node(6);
a.left.right = new node(2);
a.left.right.left = new node (7);
a.left.right.right = new node (4);
a.right.left = new node(0);
a.right.right = new node(8);

console.log(lowestCommonAncestor(a, a.left, a.left.right.right).val);
console.log(lowestCommonAncestor(a, a.left.left, a.left.right).val);
console.log(lowestCommonAncestor(a, a.left, a.right).val);
