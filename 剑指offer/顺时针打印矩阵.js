/* 辣鸡解法 */
function _printMatrix(matrix) {
  if (matrix.length === 0) {
    return [];
  }
  var r = [];
  var x = matrix[0].length - 1;
  var y = matrix.length - 1;
  for (let i = x, j = y; (i >= 0) && (j >= 0); i--, j-- ) {
    if (y - j !== 0 && y - j > y / 2) {
      break;
    }
    for (let m = x - i; m <= i; m++) {
      r.push(matrix[y - j][m]);
    }
    if (i !== x && i === 0) {
      break;
    }
    for (let m = y - j + 1; m <= j; m++) {
      r.push(matrix[m][i]);
    }
    if ( j === y - j) {
      break;
    }
    for (let m = i - 1; m >= x - i; m--) {
      r.push(matrix[j][m]);
    }
    if (x - i === i) {
      break;
    }
    for (let m = j - 1; m >= y - j + 1; m--) {
      r.push(matrix[m][x - i]);
    }
  }
  return r;
}
/* 对矩阵做逆时针旋转的解法 */
function printMatrix(matrix) {
  if (matrix.length === 0) {
    return [];
  }
  let r = [];
  while (matrix.length !== 0) {
    r = r.concat(matrix.shift());
    if (matrix.length !== 0) {
      const newMatrix = new Array(matrix[0].length);
      for (let i = 0; i < newMatrix.length; i++) {
        newMatrix[i] = [];
      }
      matrix.forEach((e, i) => {
        for (let j = 0; j < e.length; j++) {
          newMatrix[e.length - j - 1][i] = e[j];
        }
      });
      matrix = newMatrix;
    }
  }
  return r;
}

const test = [
//    [1, 2],
//    [3, 4],
//    [5, 6],
//    [7, 8],
//    [9, 10]
   [1, 2, 3, 4, 1],
   [5, 6, 7, 8, 1],
   [9, 10, 11, 12, 1],
   [13, 14, 15, 16, 1],
   [17, 18, 19, 20, 1]
];
console.log(printMatrix(test));
