function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function HasSubtree(pRoot1, pRoot2) {
  const root1 = pRoot1;
  const root2 = pRoot2;
  const roots = [];

  function handler(pRoot1, pRoot2) {
    if (pRoot2 === null) {
      return true;
    }
    if (pRoot1 === null) {
      return false;
    }
    roots.push(pRoot1);
    if (pRoot1.val === pRoot2.val) {
      return handler(pRoot1.left, pRoot2.left) && handler(pRoot1.right, pRoot2.right);
    }
    console.log(roots.map(e => e.val))
    const root1 = roots.shift();
    return handler(root1.left, root2) || handler(root1.right, root2);
  }
  return handler(root1, root2);
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
