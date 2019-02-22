var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(': stack.push('('); break;
      case '[': stack.push('['); break;
      case '{': stack.push('{'); break;
      case '}': 
        if (stack.pop() !== '{') return false;
        break;
      case ']':
        if (stack.pop() !== '[') return false;
        break;
      case ')':
        if (stack.pop() !== '(') return false;
        break;
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('([)]'))
