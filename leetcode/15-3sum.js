var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const r = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if ((i > 0) && (nums[i] === nums[i - 1])) {
      continue;
    }
    let head = i + 1;
    let tail = nums.length - 1;
    while (tail - head > 0) {
      const s = nums[i] + nums[head] + nums[tail];
      if (s > 0) {
        tail--;
      } else if (s < 0) {
        head++;
      } else {
        r.push([nums[i], nums[head], nums[tail]]);
        while (nums[head] === nums[head + 1]) head++;
        while (nums[tail] === nums[tail - 1]) tail--;
        head++;
        tail--;
      }
    }
  }
  return r;
}

console.log(threeSum([-1, -1, -1, 1]));
console.log(threeSum([1, 0, -1]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));
console.log(threeSum([-1, -1, 0, 0, 0, 0, 1, 1, 1]));
console.log(threeSum([-2, 0, 1, 1, 2]))
