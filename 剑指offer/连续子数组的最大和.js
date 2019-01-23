function FindGreatestSumOfSubArray (array) {
  let max;
  let r = [];
  for (let i = 0; i < array.length; i++) {
    r[i] = 0;
    for (let j = 0; j <= i; j++) {
      r[i] += array[j];
    }
    if (max < r[i] || max === undefined) max = r[i];
  }
  let i = 0;
  while (array[i] !== undefined) {
    let prev = r[i - 1];
    if (prev < 0) {
      for (let j = i; j < array.length; j++) {
        let temp = r[j] - prev;
        if (max < temp) max = temp;
      }
    }
    i++;
  }
  return max;
}

/* test */
const a = [6, -3, -2, 7, -15, 1, 2, 2];
const b = [1, -2, 3, 10, -4, 7, 2, -5];
console.log(FindGreatestSumOfSubArray(b))
