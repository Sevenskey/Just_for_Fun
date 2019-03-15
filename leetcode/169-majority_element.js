var majorityElement = function (nums) {
  let count = 1;
  let cur = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (cur === nums[i]) {
      count++;
    } else {
      count--;
    }
    if (count < 0) {
      cur = nums[i];
      count = 0;
    }
  }
  return cur;
}

console.log(majorityElement([2, 2, 1, 1, 0, 2, 2]))
