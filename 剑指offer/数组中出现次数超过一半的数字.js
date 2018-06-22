function MoreThanHalfNum_Solution(numbers) {
  let h = {};
  let r = 0;
  for (let i = 0; i < numbers.length; i++) {
    let n = numbers[i];
    if (! h[n]) {
      h[n] = 1;
    } else {
      h[n]++;
    }
    if (h[n] > (numbers.length / 2)) {
      r = n;
      break;
    }
  }
  return r;
}

/*** Test ***/
console.log(MoreThanHalfNum_Solution([1, 2, 3, 2, 2, 5, 4, 2]));
