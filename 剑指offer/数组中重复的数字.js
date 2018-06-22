function duplicate(numbers, duplication) {
  const h = {};
  var i = 0;
  for (i = 0; i < numbers.length; i++) {
    if (h[numbers[i]]) {
      duplication[0] = numbers[i];
      break;
    }
    h[numbers[i]] = 1;
  }

  if (i === numbers.length) {
    return false;
  }
  return true;
}

/*** Test ***/
const duplication = [];
duplicate([1, 2, 3, 4, 3, 2, 1], duplication);
console.log(duplication);
