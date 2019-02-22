/* 暴力 */
var _maxArea = function (height) {
  let r = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let temp = Math.min(height[i], height[j]) * (j - i);
      r = r > temp ? r : temp;
    }
  }
  return r;
}

/* 两点 */
var maxArea = function (height) {
  let i = 0, j = height.length - 1;
  let r = 0;
  while (j > i) {
    let temp = (j - i) * Math.min(height[i], height[j]);
    r =  r > temp ? r : temp;
    if (height[i] < height[j]) {
      i++;
    } else if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return r;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
