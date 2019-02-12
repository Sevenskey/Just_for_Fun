function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function HasSubtree(pRoot1, pRoot2) {
}

const drawBinTree = require('./draw_bintree');

const a = new TreeNode('a');
a.left = new TreeNode('a');
a.right = new TreeNode('c');
a.right.left = new TreeNode('h');
a.left.left = new TreeNode('d');
a.left.right = new TreeNode('e');
a.left.right.left = new TreeNode('f');
a.left.right.right = new TreeNode('g');
const _c = new TreeNode('a');
_c.left = new TreeNode('d');
_c.right = new TreeNode('e');

drawBinTree(a)
drawBinTree(_c)

console.log(HasSubtree(a, _c));
