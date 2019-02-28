/* high complexity */
var _canJump = function (nums) {
  if (nums.length === 1) {
    return true;
  }
  const last = nums.length - 1
  for (let i = last - 1; i >= 0; i--) {
    if (nums[i] >= last - i) {
      let r = canJump(nums.slice(0, i + 1));
      if (r) return r;
    } 
  }
  return false;
}

/* linear solution
 * attend the position of 0
 * if the sequence doesn't have 0, it must return true
 * */
var canJump = function (nums) {
  if (nums.length === 1) {
    return true;
  }
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0) {
      let f = false;
      for (let j = i - 1; j >= 0; j--) {
        if (nums[j] >= i - j + 1) {
          f = true;
          break;
        }
      }
      if (!f) return false;
    }
  }
  return true;
}

const a = [2,0,6,9,8,4,5,0,8,9,1,2,9,6,8,8,0,6,3,1,2,2,1,2,6,5,3,1,2,2,6,4,2,4,3,0,0,0,3,8,2,4,0,1,2,0,1,4,6,5,8,0,7,9,3,4,6,6,5,8,9,3,4,3,7,0,4,9,0,9,8,4,3,0,7,7,1,9,1,9,4,9,0,1,9,5,7,7,1,5,8,2,8,2,6,8,2,2,7,5,1,7,9,6];

console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))
console.log(canJump(a))
console.log(canJump([2, 0, 0]))
