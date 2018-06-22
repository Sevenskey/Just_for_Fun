function Sum_Solution(n) {
  const a = new Array(n);
  a.fill(0);
  let i = 1;
  let r = 0;
  a.forEach(function() {
    r += i;
    i++;
  })
  return r;
}

function Sum_Solution2(n) {
  if (n === 0) {
    return 0;
  }
  return n + Sum_Solution(n - 1);
}

/*** Test ***/
console.log(Sum_Solution2(4));
