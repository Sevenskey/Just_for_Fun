function TreeNode (x, p) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function levelOrder (rNode) {
  const r = [];
  const queue = [];
  queue.push(rNode);
  queue.push('|');
  let allIsNull = true;
  while (queue.length !== 0) {
    var cur = queue.shift();
    if (cur === null) {
      r.push(' ');
      queue.push(null);
      queue.push(null);
      continue;
    }
    if (cur === '|' && queue.length !== 0) {
      r.push('|');
      queue.push('|');
      if (allIsNull) break;
      allIsNull = true;
      continue;
    }
    if (cur === '|') {
      continue;
    }
    allIsNull = false;
    r.push(cur.val);
    queue.push(cur.left);
    queue.push(cur.right);
  }
  return r;
}

function getOffset (layerNum) {
  if (layerNum <= 1) {
    return 0;
  }
  if (layerNum === 2) {
    return 1;
  }
  return getOffset(layerNum - 1) * 2 + 1;
}

function getTreeHeight(rNode) {
  if (!rNode) {
    return 0;
  }
  if (!rNode.left && !rNode.right) {
    return 1;
  }
  let left = getTreeHeight(rNode.left) + 1;
  let right = getTreeHeight(rNode.right) + 1;
  return left > right ? left : right;
}

function drawBintree (rNode) {
  let levelOrderSeq = levelOrder(rNode);
  let overallCount = getTreeHeight(rNode);
  let c = '';
  levelOrderSeq.forEach((e) => {
    if (e !== '|') {
      c += e;
      let space = '';
      let interval = getOffset(overallCount+1);
      while (interval--) {
        space += ' ';
      }
      c += space;
    } else {
      let offset = getOffset(overallCount--);
      let space = '';
      while (offset--) {
        space += ' ';
      }
      console.log(space + c);
      c = '';
    }
  })
}

/* test */

const a = new TreeNode('a');
a.left = new TreeNode('a', a);
a.right = new TreeNode('c', a);
a.left.left = new TreeNode('d', a.left);
a.left.right = new TreeNode('e', a.left);
a.right.left = new TreeNode('h', a.right);
a.right.right = new TreeNode('i', a.right);
a.left.right.left = new TreeNode('f', a.left.right);
a.left.right.right = new TreeNode('g', a.left.right);
a.left.right.right.left = new TreeNode('z', a.left.right.right);
a.left.right.right.right = new TreeNode('y', a.left.right.right);

drawBintree(a)

module.exports = drawBintree;
