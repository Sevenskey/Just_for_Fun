var removeKdigits = function(num, k) {
  const a = [];
  for (let i = 0; i < num.length; i++) {
    a[i] = num[i];
  }
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < a.length; j++) {
      if (j === a.length - 1 || a[j] > a[j + 1]) {
        a.splice(j, 1);
        break;
      }
    }
  }
  while (a[0] === '0') {
    a.shift();
  }
  if (a.length === 0) {
    return '0';
  }
  return a.join('');
}

/*** Test ***/
console.log(removeKdigits('1432219', 3) === '1219');
console.log(removeKdigits('10200', 1) === '200');
console.log(removeKdigits('10', 2) === '0');
