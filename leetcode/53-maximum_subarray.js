var _maxSubArray = function (nums) {
  const r = [];
  let max;
  for (let i = 0; i < nums.length; i++) {
    let x = 0;
    for (let j = 0; j <= i; j++) {
      x += nums[j];
    }
    if (max < x || max === undefined) max = x;
    r.push(x);
  }
  for (let i = 0; i< r.length; i++) {
    for (let j = 0; j < i; j++) {
      let y = r[i] - r[j];
      if (max < y) max = y;
    }
  }
  return max;
}

/* dp 解法 */
var maxSubArray = function (nums) {
  let n = nums.length;
  let dp = [];
  dp[0] = nums[0];
  let max = nums[0];
  for (let i = 1; i < n; i++) {
    dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
    max = max > dp[i] ? max : dp[i];
  }
  return max;
}

const a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const b = [-4, -1, -2, -4, -6, -2, -8];
console.log(maxSubArray(a));
