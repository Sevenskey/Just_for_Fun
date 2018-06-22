function TreeNode(x){
  this.val = x;
  this.left = null;
  this.right = null;
}

function Print(pRoot) {
  let c = pRoot;
  const f = 'f';
  const a = [f];
  let r = [];
  let rr = [];
  while(a.length !== 0) {
    if (c === f) {
      a.push(f);
      rr.push(r)
      r = [];
      c = a.shift();
      continue;
    }
    if (c !== null) {
      r.push(c.val);
      a.push(c.left);
      a.push(c.right);
    }
    c = a.shift();
  }
  console.log(rr);
  return rr;
}


/*** Test ***/
const a = new TreeNode('a');
a.left = new TreeNode('a');
a.right = new TreeNode('c');
a.left.left = new TreeNode('d');
a.left.right = new TreeNode('e');
a.left.right.left = new TreeNode('f');
a.left.right.right = new TreeNode('g');

Print(a);
