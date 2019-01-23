function ReverseSentence (str) {
  let r = '';
  let temp = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      r = ' ' + temp + r;
      temp = '';
    } else {
      temp += str[i];
    }
  }
  r = temp + r;
  return r;
}

/* test */
const a = 'student. a am I';
console.log(ReverseSentence(a))
