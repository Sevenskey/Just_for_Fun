function reOrderArray(array) {
  const l = array.length;
  const newArr = new Array(l);
  const r = new Array(l);
  let oddCount = 0;
  let evenCount = l - 1;
  for (let i = 0; i < l; i++) {
    if (array[i] % 2 === 0) {
      newArr[evenCount] = array[i];
      evenCount--;
    } else {
      newArr[oddCount] = array[i];
      oddCount++;
    }
  }
  for (let i = 0; i < Math.floor(l / 4); i++) {
    let temp = newArr[i + oddCount];
    newArr[i + oddCount] = newArr[l - i - 1];
    newArr[l - i - 1] = temp;
  }
  return newArr;
}

/*** Test ***/
const array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(reOrderArray(array));
