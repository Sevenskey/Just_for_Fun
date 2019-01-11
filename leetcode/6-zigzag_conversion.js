var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  var a = [];
  for (var i = 0; i < s.length; i++) {
    a.push(s.slice(i, numRows + i));
    a.push(s.slice(i + numRows, i + numRows * 2 - 2));
    i = i + numRows + numRows - 2 - 1;
  }
  var r = '';
  for (i = 0; i < numRows; i++) {
    for (var j = 0; j < a.length; j++) {
      if (j % 2 === 0) {
        r += a[j][i] || '';
      } else {
        r += a[j][numRows - 2 - i] || '';
      }
    }
  }
  return r;
}

/* test */
console.log(convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR');
console.log(convert('PAYPALISHIRING', 4) === 'PINALSIGYAHRPI');
