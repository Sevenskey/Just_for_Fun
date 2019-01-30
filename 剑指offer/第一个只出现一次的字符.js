/* 正常做法是遍历两遍+哈希计数，这里是只遍历一遍的方法 */
function FirstNotRepeatingChar(str) {
  let r = -1;
  let table = [];
  let c = '';
  let s = [];
  for (let i = str.length - 1; i >= 0; i--) {
    if (table[str[i]] === undefined) {
      c = str[i];
      r = i;
      s.push([c, r]);
      table[str[i]] = 0;
    } else if (c === str[i]) {
      s.pop();
      let cr = s[s.length - 1];
      if (cr) {
        c = cr[0];
        r = cr[1];
      } else {
        c = '';
        r = -1;
      }
    }
    table[str[i]]++;
  }
  return r;
}

/* test */
console.log(FirstNotRepeatingChar('aabcdeee'))
console.log(FirstNotRepeatingChar('abbbcdeeef'))
console.log(FirstNotRepeatingChar('aabbbcdeeef'))
console.log(FirstNotRepeatingChar('aabbbccddeeeff'))
console.log(FirstNotRepeatingChar(''))
