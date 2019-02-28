var exist = function (board, word) {
  const xl = board[0].length;
  const yl = board.length;
  for (let i = 0; i < yl; i++) {
    for (let j = 0; j < xl; j++) {
      if (board[i][j] === word[0]) {

      }
    }
  }
  function search(i, j, index) {
    if (i >= yl || j >= xl) {
      return false;
    }
    if (index === word.length) {
      return true;
    }
    if (board[i][j] === word[index]) {
      return search(i + 1, j, index + 1) || search(i, j + 1, index + 1);
    }
  }
}
