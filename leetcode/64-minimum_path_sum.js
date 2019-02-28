var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length; 
  const path = [];
  for (let i = 0; i < m; i++) {
    path[i] = [];
  }
  path[0][0] = grid[0][0];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      let a = path[i][j - 1];
      let b = i === 0 ? undefined : path[i - 1][j];
      if (a !== undefined && b !== undefined) {
        path[i][j] = (a < b ? a : b) + grid[i][j];
      } else if (a !== undefined) {
        path[i][j] = a + grid[i][j];
      } else if (b !== undefined) {
        path[i][j] = b + grid[i][j];
      }
    }
  }
  return path[m - 1][n - 1];
}

const a = [
  [1,3,1],
    [1,5,1],
      [4,2,1]

  ]
console.log(minPathSum(a))
