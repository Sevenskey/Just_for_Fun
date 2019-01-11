function TreeNode (x, p) {
  this.val = x;
  this.left = null;
  this.right = null;
  this.next = p || null;
}

function GetNext (pNode) {
  if (pNode.right !== null) {
    return down(pNode.right);
  } else {
    return up(pNode);
  }
  function up (pNode) {
    if (pNode.next === null) {
      return null;
    }
    if (pNode.next.right === pNode) {
      return up(pNode.next);
    } else {
      return pNode.next;
    }
  }
  function down (cNode) {
    if (cNode.left !== null) {
      return down(cNode.left);
    } else {
      return cNode;
    }
  }
}

/*** Test ***/
const a = new TreeNode('a');
a.left = new TreeNode('a', a);
a.right = new TreeNode('c', a);
a.left.left = new TreeNode('d', a.left);
a.left.right = new TreeNode('e', a.left);
a.right.left = new TreeNode('h', a.right);
a.right.right = new TreeNode('i', a.right);
a.left.right.left = new TreeNode('f', a.left.right);
a.left.right.right = new TreeNode('g', a.left.right);
a.left.right.right.left = new TreeNode('z', a.left.right.right);
a.left.right.right.right = new TreeNode('y', a.left.right.right);

function inorder (rNode) {
  const r = [];
  function handler (rNode) {
    if (rNode === null) {
      return;
    }
    handler(rNode.left);
    r.push(rNode.val);
    handler(rNode.right);
  }
  handler(rNode);
  console.log(r);
}
inorder(a);
console.log(`input: ${a.val}`, `output: ${GetNext(a).val}`);
console.log(`input: ${a.left.val}`, `output: ${GetNext(a.left).val}`);
console.log(`input: ${a.right.val}`, `output: ${GetNext(a.right).val}`);
console.log(`input: ${a.right.left.val}`, `output: ${GetNext(a.right.left).val}`);
console.log(`input: ${a.right.right.val}`, `output: ${GetNext(a.right.right)}`);
console.log(`input: ${a.left.right.right.right.val}`, `output: ${GetNext(a.left.right.right.right).val}`);
