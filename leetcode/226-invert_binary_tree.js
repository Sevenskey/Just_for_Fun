var invertTree = function (root) {
  function handler (root) {
    if (root === null) {
      return;
    }
    let temp = root.right;
    root.right = root.left;
    root.left = temp;
    invertTree(root.right)
    invertTree(root.left);
  }
  handler(root);
  return root;
}
