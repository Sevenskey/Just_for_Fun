var hammingDistance = function (x, y) {
  let r = x ^ y;
  let count = 0;
  while ( r !== 0 ) {
    if (r & 1 === 1) count++;
    r >>= 1;
  }
  return count;
}

console.log(hammingDistance(1, 5));
