/* 辣鸡解法 */
function PrintMinNumber(numbers, posi) {
  if (numbers.length === 1) {
    return numbers[0].toString();
  }
  if (! numbers.some((e, i, a) => i === a.length - 1 ? false : e !== a[i+1])) {
    return numbers.join('');
  }
  if (! numbers.join('').split('').some((e, i, a) => i === a.length - 1 ? false : e !== a[i+1])) {
    return numbers.join('');
  }
  posi = posi || 0;
  let min = 10;
  let _numbers = [];
  let i = 0;
  let r = '';
  while (numbers.length !== 0) {
    let curNumber = numbers[i].toString();
    let cur = parseInt(curNumber[posi >= curNumber.length ? curNumber.length - 1 : posi]);
    if (cur < min) {
      min = cur;
      numbers = numbers.concat(_numbers);
      _numbers = numbers.splice(i, 1);
    } else if (cur === min) {
      _numbers.push(numbers.splice(i, 1)[0]);
    } else {
      i++;
    }
    if (i === numbers.length) {
      r += PrintMinNumber(_numbers, posi + 1);
      i = 0;
      posi++;
      min = 10;
      _numbers = [];
    }
  }
  return r;
}

/* test */
console.log(PrintMinNumber([3, 32, 321, 123, 123]))
console.log(PrintMinNumber([1, 11, 111]))
