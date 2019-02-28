var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }
  if (root.left && root.right) {
    let a = 1 + maxDepth(root.left);
    let b = 1 + maxDepth(root.right);
    return a > b ? a : b;
  }
  if (root.left) {
    return 1 + maxDepth(root.left);
  }
  if (root.right) {
    return 1 + maxDepth(root.right);
  }
}
