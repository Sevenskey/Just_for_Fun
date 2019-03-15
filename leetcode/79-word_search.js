var exist = function (board, word) {
  const xl = board[0].length;
  const yl = board.length;
  const path = [];
  for (let i = 0; i < yl; i++) {
    path[i] = [];
    path[i].length = xl;
    path[i].fill(0);
  }
  for (let i = 0; i < yl; i++) {
    for (let j = 0; j < xl; j++) {
      if (board[i][j] === word[0]) {
        if (search(i, j, 0)) {
          return true;
        }
        path[i][j] = 0;
      }
    }
  }
  function search(i, j, index) {
    if (path[i][j] === 0 && board[i][j] === word[index]) {
      path[i][j] = 1;
      if (index + 1 === word.length) {
        return true;
      }
      let a = b = c = d = false;
      if (i + 1 < yl && !path[i + 1][j]) {
        a = search(i + 1, j, index + 1);
        path[i + 1][j] = 0;
      }
      // 玛德我真是想不通为什么不剪枝第四个测试例就通不过
      if (!a && i - 1 >= 0 && !path[i - 1][j]) {
        b = search(i - 1, j, index + 1);
        path[i - 1][j] = 0;
      }
      if (!a && !b && j + 1 < xl && !path[i][j + 1]) {
        c = search(i, j + 1, index + 1);
        path[i][j + 1] = 0;
      }
      if (!a && !b && !c && j - 1 >= 0 && !path[i][j - 1]) {
        d = search(i, j - 1, index + 1);
        path[i][j - 1] = 0;
      }
      return a || b || c || d;
    } else {
      return false;
    }
  }
  return false;
}

const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
const board2 = [['a']];

const board3 = [
  ["F","Y","C","E","N","R","D"],
  ["K","L","N","F","I","N","U"],
  ["A","A","A","R","A","H","R"],
  ["N","D","K","L","P","N","E"],
  ["A","L","A","N","S","A","P"],
  ["O","O","G","O","T","P","N"],
  ["H","P","O","L","A","N","O"]]

console.log(exist(board, 'ABCB'))
console.log(exist(board, 'ASFDA'))
console.log(exist(board2, 'a'))
console.log(exist(board3, 'POLAND'));
