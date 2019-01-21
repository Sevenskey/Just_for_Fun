function multiply(array) {
  const len = array.length;
  const b = [];
  for (let i = 0; i < len; i++) {
    b[i] = 1;
    for (let j = 0; j < len; j++) {
      if (i === j) {
        continue;
      }
      b[i] *= array[j];
    }
  }
  return b;
}

/* test */
const a = [1, 2, 3];
console.log(multiply(a))
