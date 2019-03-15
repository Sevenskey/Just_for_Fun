function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

var pathSum = function (root, sum) {
  let count = 0;
  if (root === null) {
    return 0;
  }
  function handler (root, sum) {
    if (root === null) {
      return ;
    }
    if (sum - root.val === 0) {
      count++;
    }
    handler(root.left, sum - root.val);
    handler(root.right, sum - root.val);
  }
  const q = [root];
  while (q.length !== 0) {
    let cur = q.shift();
    if (cur.left) q.push(cur.left);
    if (cur.right) q.push(cur.right);
    handler(cur, sum);
  }
  return count;
}

const a = new TreeNode(10);
a.left = new TreeNode(5);
a.right = new TreeNode(-3);
a.left.left = new TreeNode(3);
a.left.right = new TreeNode(2);
a.right.right = new TreeNode(11);
a.left.left.left = new TreeNode(3);
a.left.left.right = new TreeNode(-2);
a.left.right.right = new TreeNode(1);

console.log(pathSum(a, 8));
