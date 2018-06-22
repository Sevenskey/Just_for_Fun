function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function reConstructBinaryTree(pre, vin) {
  if (vin.length === 1) {
    return new TreeNode(vin[0]);
  }
  if (vin.length === 0) {
    return null;
  }
  let rootVal = pre[0];
  let root = new TreeNode(rootVal);
  let leftPre, rightPre, leftVin, rightVin;
  for (let i = 0; i < pre.length; i++) {
    if (vin[i] === rootVal) {
      leftVin = vin.slice(0, i);
      rightVin = vin.slice(i+1);
      leftPre = pre.slice(1, 1 + leftVin.length);
      rightPre = pre.slice(1 + leftVin.length);
      break;
    }
  }
  root.left = reConstructBinaryTree(leftPre, leftVin);
  root.right = reConstructBinaryTree(rightPre, rightVin);

  return root;
}

/*** Test ***/
let pre = [1, 2, 4, 7, 3, 5, 6, 8];
let vin = [4, 7, 2, 1, 5, 3, 8, 6];

let root = reConstructBinaryTree(pre, vin);

function pret(root) {
  if (root === null) {
    return;
  }
  console.log(root.val);
  console.log(pret(root.left));
  console.log(pret(root.right));
}

let r = [];
function vint(root) {
  if (root === null) {
    return;
  } 
  vint(root.left);
  r.push(root.val);
  vint(root.right);
}

//pret(root)
vint(root)
console.log(r)
