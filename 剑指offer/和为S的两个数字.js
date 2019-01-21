/*
 * 设两数分别为m, n，乘积为y
 * m + n = S => m = S - n
 * y = (S - n)*n => y = -n^2 + S*n
 * 开口向下，有两根 0，S，故m或n越小，y越小
 */
function FindNumbersWithSum(array, num) {
  let len = array.length;
  let res = [];
  for (let i = 0; i < len / 2; i++) {
    let f = false;
    for (let j = len - 1; j > len / 2; j--) {
      if (array[i] + array[j] === num) {
        f = true;
        res.push(array[i]);
        res.push(array[j]);
        break;
      }
    }
    if (f) break;
  }
  return res;
}

/* test */
const a = [0, 1, 2, 3, 4, 4, 7];
console.log(FindNumbersWithSum(a, 5));
