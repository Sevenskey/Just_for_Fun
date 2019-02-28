var countBits = function (num) {
  const r = [0];
  for (let i = 1; i <= num; i++) {
    r[i] = r[i >> 1] + (i & 1);
  }
  return r;
}
console.log(countBits(15))
/* 0 0
 * 1 1
 * 1 10
 * 2 11
 * 1 100
 * 2 101
 * 2 110
 * 3 111
 * 1 1000
 * 2 1001
 * 2 1010
 * 3 1011
 * 2 1100
 * 3 1101
 * 3 1110
 * 4 1111
 * 
 */
