var isSymmetric = function (root) {
  if (! root) {
    return true;
  }
  function handler (l, r) {
    if (l === null && r === null) {
      return true;
    }
    if (l === null || r === null) {
      return false;
    }
    if (l.val !== r.val) {
      return false;
    }
    return handler(l.left, r.right) && handler(l.right, r.left);
  }

  return handler(root.left, root.right);
}


