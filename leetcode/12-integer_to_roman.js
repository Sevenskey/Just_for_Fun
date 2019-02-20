var intToRoman = function (num) {
  const symbol = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];

  let r = '';
  for (let i = 0; i < symbol.length; i++) {
    let t = Math.floor(num / symbol[i][0]);
    while (t) {
      r += symbol[i][1];
      t--;
    }
    num %= symbol[i][0];
  }
  return r;
}

console.log(intToRoman(58))
console.log(intToRoman(1994))
