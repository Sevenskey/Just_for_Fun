function TreeDepth(pRoot) {
  if (!pRoot) {
    return 0;
  }
  if (!pRoot.left && !pRoot.right) {
    return 1;
  }
  let left = TreeDepth(pRoot.left) + 1;
  let right = TreeDepth(pRoot.right) + 1;
  return left > right ? left : right;
}

/* test */

function TreeNode (x, p) {
  this.val = x;
  this.left = null;
  this.right = null;
}

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

console.log(TreeDepth(a))
