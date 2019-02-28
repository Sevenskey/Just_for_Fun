function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}
var mergeTrees = function (t1, t2) {
  if (t1 === null) {
    return t2;
  }
  const root = t1;
  function merge(r1, r2) {
    if (r1 === null && r2 === null) {
      return null;
    }
    if (r1 === null) {
      return r2;
    } else if (r2 !== null) {
      r1.val += r2.val;
      merge(r1.left, r2.left);
      merge(r1.right, r2.right);
    } else if (r2 === null) {
      merge(r1.left, null);
      merge(r1.right, null);
    }
    if (r1 !== null && r2 !== null) {
      if (r1.left === null) {
        r1.left = r2.left;
      }
      if (r1.right === null) {
        r1.right = r2.right;
      }
    }
  }
  merge(t1, t2);
  return root;
}
