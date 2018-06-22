const stack1 = [], stack2 = [];

function push(node) {
  stack1.push(node);
}

function pop() {
  let t, r;
  while ((t = stack1.pop()) !== undefined) {
    stack2.push(t);
  }
  while ((t = stack2.pop()) !== undefined) {
    stack1.push(t);
  }
  return r;
}
