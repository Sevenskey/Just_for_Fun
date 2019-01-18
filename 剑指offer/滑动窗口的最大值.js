function maxInWindows (num, size) {
  const stack1 = [];
  const stack2 = [];
  const result = [];
  let cur;
  while (num.length !== 0) {
    cur = num.shift();
    stack1.push(cur);
    if (stack2.length === 0 || stack2[stack2.length - 1].val <= cur) {
      stack2.push({val: cur});
    } else {
      stack2.push(stack2[stack2.length - 1]);
    }
    if (stack1.length === size) {
    }
  }
  return result;
}

/* test */
const test = [2, 3, 4, 2, 6, 2, 5, 1];
console.log(maxInWindows(test, 3));
