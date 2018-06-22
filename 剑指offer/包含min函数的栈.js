const stack = [];
function push(node) {
  let e = {v: node}
  if (stack.length !== 0) {
    let lastMin = stack[stack.length-1].min;
    if (lastMin > node) {
      e.min = node;
    } else {
      e.min = lastMin;
    }
  } else {
    e.min = node;
  }
  console.log(e)
  stack.push(e);
}
function pop() {
  return stack.pop().v;
}
function top() {
  return stack[stack.length-1].v;
}
function min() {
  return stack[stack.length-1].min;
}

/*** Test ***/
push(2);
push(1);
push(0);
push(5);
push(4);

console.log(min());
