/* high complexity */
var _uniquePaths = function (m, n) {
  const queue = [[0, 0]];
  let count = 0;
  while (queue.length !== 0) {
    let c = queue.shift();
    if (c[0] + 1 < m) {
      queue.push([c[0] + 1, c[1]]);
    }
    if (c[1] + 1 < n) {
      queue.push([c[0], c[1] + 1]);
    }
    if (c[0] === m - 1 && c[1] === n - 1) {
      count++;
    }
  }
  return count;
}

/* dp solution */
var uniquePaths = function (m, n) {
  let path = [];
  for (let i = 0; i < m; i++) {
    let arr = [];
    arr.length = n;
    arr.fill(1);
    path[i] = arr;
  }
  path[0][0] = 1;
  for (let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      if (! path[i]) {
        path[i] = [];
        path[i].length = n;
      }
      path[i][j] = path[i - 1][j] + path[i][j - 1];
    }
  }
  return path[m - 1][n - 1];
}

console.log(uniquePaths(3, 2))
console.log(uniquePaths(7, 3))
console.log(uniquePaths(10, 10))
