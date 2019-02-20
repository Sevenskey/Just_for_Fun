var permute = function (nums) {
  let r = [];
  if (nums.length === 1) {
    return [nums];
  }
  if (nums.length === 2) {
    return [
      [nums[0], nums[1]],
      [nums[1], nums[0]]
    ]
  }
  for (let i = 0; i < nums.length; i++) {
    let temp = [nums[i]];
    let subs = permute(nums.slice(0, i).concat(nums.slice(i+1, nums.length)));
    for (let j = 0; j < subs.length; j++) {
      r.push(temp.concat(subs[j]));
    }
  }
  return r;
}


console.log(permute([1, 2, 3]))
console.log(permute([1]))
