/* 写的什么jb */
var _nextPermutation = function (nums) {
  const tail = nums.length - 1;
  if (nums[tail] > nums[tail - 1] && nums[tail - 1] > nums[tail - 2]) {
    let temp = nums[tail];
    nums[tail] = nums[tail - 1];
    nums[tail - 1] = temp;
  } else if (nums[tail] > nums[tail - 1] && nums[tail - 2] > nums[tail -1]) {
    let temp = nums[tail];
    nums[tail] = nums[tail - 1];
    nums[tail - 1] = temp;
  } else {
    let i = tail;
    while (nums[i] <= nums[i - 1]) {
      i--;
    }
    if (i === 0) {
      return nums.reverse();
    }
    let x = tail;
    while (nums[i - 1] >= nums[x]) {
      x--;
    }
    let temp = nums[x];
    nums[x] = nums[i - 1];
    nums[i - 1] = temp;
    for (let j = i; j <= tail - ((tail - i) / 2); j++) {
      let temp = nums[j];
      nums[j] = nums[tail - j + i];
      nums[tail - j + i] = temp;
    }
  }
  return nums;
}

var nextPermutation = function (nums)
/*
 * 1 2 3 4
 * 1 2 4 3
 * 1 3 2 4
 * 1 3 4 2
 * 1 4 2 3
 * 1 4 3 2
 * 2 1 3 4
 *
 *
 * 1 2 3 4 5
 * 1 2 3 5 4
 * 1 2 4 3 5
 * 1 2 4 5 3
 * 1 2 5 3 4
 * 1 2 5 4 3
 * 1 3 2 4 5
 *
 *
 * 3 1 4 2 5
 */

console.log(nextPermutation([4, 2, 0, 2, 3, 1, 0]))
