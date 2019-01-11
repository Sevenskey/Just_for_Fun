function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function PrintFromTopToBottom(root) {
  const arr = [root];
  const r = [];
  let c;
  while(arr.length !== 0) {
    c = arr.shift();
    if (c !== null) {
      r.push(c.val);
      arr.push(c.left);
      arr.push(c.right);
    }
  }
  return r;
}

const a = new TreeNode('a');
a.left = new TreeNode('a');
a.right = new TreeNode('c');
a.left.left = new TreeNode('d');
a.left.right = new TreeNode('e');
a.left.right.left = new TreeNode('f');
a.left.right.right = new TreeNode('g');

console.log(PrintFromTopToBottom(a))
