function Power(base, exponent) {
  function handler(base, exponent) {
    if (exponent === 0) {
      return 1;
    }
    if (exponent < 0) {
      if (base === 0) {
        throw new Error('分母不能为0');
      }
      return 1 / base * handler(base, exponent + 1);
    }
    return base * handler(base, exponent - 1);
  }
  // JavaScript 浮点数问题看此篇文章：
  // https://github.com/camsong/blog/issues/9
  return parseFloat(handler(base, exponent).toPrecision(12));
}

/*** Test ***/
console.log(Power(0, 3));
console.log(Power(0.3, -3));
console.log(Power(0.3, 3));
