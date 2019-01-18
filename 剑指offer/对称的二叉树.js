function isSymmetrical(pRoot) {
  if (pRoot === null) {
    return true;
  }
  function handler(pLeft, pRight) {
    if (! pLeft && ! pRight) {
      return true;
    }
    if (! pLeft || ! pRight) {
      return false;
    }
    if (pLeft.val === pRight.val) {
      return handler(pLeft.left, pRight.right) && handler(pLeft.right, pRight.left);
    } else {
      return false;
    }
  }
  return handler(pRoot.left, pRoot.right);
}

const drawBintree = require('./draw_bintree.js').drawBintree;
const testTree1 = require('./draw_bintree.js').testTree1;
const testTree2 = require('./draw_bintree.js').testTree2;

drawBintree(testTree1);
drawBintree(testTree2);
console.log(isSymmetrical(testTree1))
console.log(isSymmetrical(testTree2))
