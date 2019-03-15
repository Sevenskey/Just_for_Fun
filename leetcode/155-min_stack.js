var MinStack = function () {
  this.e = [];
  this.min = [];
  this.l = 0;
}

MinStack.prototype.push = function (x) {
  if (this.min[this.l - 1] > x || this.min[this.l - 1] === undefined) {
    this.min.push(x);
  } else {
    this.min.push(this.min[this.l - 1]);
  }
  this.l += 1;
  this.e.push(x);
}

MinStack.prototype.pop = function () {
  this.min.pop();
  this.l -= 1;
  return this.e.pop();
}

MinStack.prototype.top = function () {
  return this.e[this.l - 1];
}

MinStack.prototype.getMin = function () {
  return this.min[this.l - 1];
}

let minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());
