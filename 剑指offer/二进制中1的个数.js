function NumberOf1(n) {
  let r = 0;
  for (let i = 0; i < 32; i++) {
    if (n & 1 === 1) {
      r++;
    }
    n >>= 1;
  }
  return r;
}

/*** Test ***/
console.log(NumberOf1(2147483648))

