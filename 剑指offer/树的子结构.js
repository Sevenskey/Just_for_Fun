function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function HasSubtree(pRoot1, pRoot2) {
  if (pRoot1 === null || pRoot2 === null) {
    return false;
  }
  return hasSubtree(pRoot1, pRoot2, pRoot2);
}

function hasSubtree(node1, node2, pRoot2) {
  if (node1 === null && node2 === null) {
    return true;
  } else if (node1 === null) {
    return false;
  } else if (node2 === null){
    return true;
  }
  console.log(node1.val, node2.val)
  if (compareNode(node1, node2)) {
    return hasSubtree(node1.left, node2.left, pRoot2) && 
      hasSubtree(node1.right, node2.right, pRoot2);
  } else {
    return hasSubtree(node1.left, pRoot2, pRoot2) || 
      hasSubtree(node1.right, pRoot2, pRoot2);
  }
}

function compareNode(node1, node2) {
  if (node1.val === node2.val) {
    return true;
  } else {
    return false;
  }
}

const a = new TreeNode('a');
a.left = new TreeNode('a');
a.right = new TreeNode('c');
a.left.left = new TreeNode('d');
a.left.right = new TreeNode('e');
a.left.right.left = new TreeNode('f');
a.left.right.right = new TreeNode('g');
const _c = new TreeNode('a');
_c.left = new TreeNode('d');
_c.right = new TreeNode('e');

console.log(HasSubtree(a, _c));
