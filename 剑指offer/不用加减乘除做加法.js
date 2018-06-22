function Add(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return Add((num1 ^ num2), (num1 & num2) << 1);
}

/*** Test ***/
console.log(Add(1, 2) === 3);
console.log(Add(1, 1) === 2);
console.log(Add(15, 15) === 30);
console.log(Add(111, 899) === 1010);
