var rotate = function (matrix) {
  if (matrix.length === 0) {
    return matrix;
  }
  const queue = [];
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      queue.push(matrix[j][i]);
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = matrix[0].length - 1; j >= 0; j--) {
      matrix[i][j] = queue.shift();
    }
  }
  return matrix;
}

const a = [
  [1,2,3],
    [4,5,6],
      [7,8,9]

]
const b = [
  [ 5, 1, 9,11 ],
    [ 2, 4, 8,10 ],
      [13, 3, 6, 7],
        [15,14,12,16]

]
console.log(rotate(a));
console.log(rotate(b))
