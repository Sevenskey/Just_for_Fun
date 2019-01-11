function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function Print(pRoot) {
  var temp = [];
  var temp2 = [];
  var r = [];
  var result = [];
  temp.push(pRoot);
  while(temp.length !== 0) {
    temp2 = [];
    r = [];
    while(temp.length !== 0) {
      var cur = temp.shift();
      if (cur === null) {
        continue;
      }
      temp2.push(cur.left);
      temp2.push(cur.right);
      r.push(cur.val);
    }
    if (r.length !== 0){
      result.push(r);
    }
    temp = temp2;
    temp2 = [];
    r = [];
    while(temp.length !== 0) {
      var cur = temp.shift();
      if (cur === null) {
        continue;
      }
      temp2.push(cur.left);
      temp2.push(cur.right);
      r.push(cur.val);
    }
    if (r.length !== 0){
      result.push(r.reverse());
    }
    temp = temp2;
  }
  console.log(result)
  return result;
}

/* a version that not use .reverse() */
function Print2(pRoot) {
  var stack1 = [];
  var stack2 = [];
  var r = [];
  var result = [];
  stack1.push(pRoot);
  while (stack1.length !== 0) {
    while (stack1.length !== 0) {
      var e = stack1.pop();
      if (e === null) {
        continue;
      }
      stack2.push(e.left);
      stack2.push(e.right);
      r.push(e.val);
    }
    if (r.length !== 0) result.push(r);
    r = [];
    while (stack2.length !== 0) {
      var e = stack2.pop();
      if (e === null) {
        continue;
      }
      stack1.push(e.right);
      stack1.push(e.left);
      r.push(e.val);
    }
    if (r.length !== 0) result.push(r);
    r = [];
  }
  console.log(result);
  return result;
}

/*** Test ***/
const a = new TreeNode('a');
a.left = new TreeNode('a');
a.right = new TreeNode('c');
a.left.left = new TreeNode('d');
a.left.right = new TreeNode('e');
a.right.left = new TreeNode('h');
a.right.right = new TreeNode('i');
a.left.right.left = new TreeNode('f');
a.left.right.right = new TreeNode('g');

Print(a);
Print2(a);
