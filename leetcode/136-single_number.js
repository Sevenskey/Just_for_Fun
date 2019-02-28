var singleNumber = function (nums) {
  r = nums[0];
  for (let i = 1; i < nums.length; i++) {
    r ^= nums[i];
  }
  return r;
}

console.log(singleNumber([2, 2, 4, 1, 1]))
