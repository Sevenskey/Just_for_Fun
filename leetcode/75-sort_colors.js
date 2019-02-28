function swap (arr, ai, bi) {
  let temp = arr[ai];
  arr[ai] = arr[bi];
  arr[bi] = temp;
}
var sortColors = function (nums) {
  let l = nums.length - 1;
  let k = 0;
  for (let i = 0; i <= l; i++) {
    if (nums[i] === 0 && k !== i) {
      swap(nums, i, k);
      i--; k++;
    } else if (nums[i] === 2 && l !== i) {
      swap(nums, i, l);
      i--; l--;
    }
  }
  return nums;
}

console.log(sortColors([1, 0, 0, 1, 0, 1, 0]))
