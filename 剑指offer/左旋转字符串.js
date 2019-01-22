function LeftRotateString(str, n) {
  if (! str) return '';
  n = n % str.length;
  return str.slice(n) + str.slice(0, n);
}

/* test */
console.log(LeftRotateString('abcXYZdef', 13));
