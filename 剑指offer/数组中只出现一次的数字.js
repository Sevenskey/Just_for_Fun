function FindNumsAppearOnce (array) {
  let r = array[0];
  for (let i = 1; i < array.length; i++) {
    r ^= array[i];
  }
  let offset = 0;
  const mask = 1;
  while ((r & mask) !== 1) {
    r >>= 1;
    offset++;
  }
  let a, b;
  for (let i = 0; i < array.length; i++) {
    if ((array[i] >> offset) & mask === 1) {
      if (a === undefined) a = array[i];
      else a ^= array[i];
    } else {
      if (b === undefined) b = array[i];
      else b ^= array[i];
    }
  }
  return [a, b];
}

/* test */
const a = [1, 2, 2, 1, 4, 5, 6, 3, 3, 6];
console.log(FindNumsAppearOnce(a))
