/* 超时 没过 */
function _Find (target, array) {
  if (array.length === 0) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    const r = handler(target, array[i]);
    if (r === true) return true;
    else if (r === false) continue;
    else return Find(target, getSubArr(array, r[0]));
  }
  return false;
}

function getSubArr(arr, keyValue) {
  let i = 0;
  while (arr[0][i] !== keyValue) {
    i++;
  }
  const r = [];
  for (let j = 1; j < arr.length; j++) {
    r.push(arr[j].slice(0, i + 1));
  }
  return r;
}

function handler (target, array) {
  const len = array.length;
  if (target === array[len >> 1]) {
    return true;
  }
  if (array.length === 0 || array.length === 1) {
    return false;
  }
  if (array.length === 2) {
    if (target < array[1] && target > array[0]) {
      return array;
    } else {
      return false;
    }
  }
  if (target > array[len >> 1]) {
    return handler(target, array.slice(len >> 1, len));
  } else {
    return handler(target, array.slice(0, (len >> 1) + 1));
  }
}

/* 想得有些太复杂啦，以下是简化版 */
function _Find (target, array) {
  for (let i = 0; i < array.length; i++) {
    const cur = array[i];
    for (let j = 0; j < cur.length; j++) {
      if (cur[j] === target) {
        return true;
      }
      if (cur[j - 1] < target && cur[j] > target) {
        return Find(target, getSubArr(array, cur[j]))
      }
    }
  }
  return false;
}

/* 狗熊是怎么死的？笨死的 */
function Find (target, array) {
  let i = array.length - 1;
  let j = 0;
  while (i >= 0 && j < array[0].length) {
    if (target === array[i][j]) return true;
    if (target > array[i][j]) j++;
    if (target < array[i][j]) i--;
  }
  return false;
}

/* test */
const a = [
[1, 2, 3, 4, 5],
[2, 3, 4, 5, 6],
[8, 9, 10, 11, 12]
];

const b = [[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]

console.log(Find(19, b));
