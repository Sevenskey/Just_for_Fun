var letterCombinations = function (digits) {
  const dict = [
    [], [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
  ];
  let r = [];
  for (let i = 0; i < digits.length; i++) {
    if (r.length === 0) {
      const d = dict[digits[i]];
      for (let j = 0; j < d.length; j++) {
        r.push(d[j]);
      }
      continue;
    }
    let l = r.length;
    while (l > 0) {
      const d = dict[digits[i]];
      const c = r.shift();
      for (let j = 0; j < d.length; j++) {
        r.push(c + d[j]);
      }
      l--;
    }
  }
  return r;
}

console.log(letterCombinations('22'));
