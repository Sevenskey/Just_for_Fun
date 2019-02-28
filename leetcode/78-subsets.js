/* bit */
var subsets = function (nums) {
  if (nums.length === 0) {
    return [[]];
  }
  let len = nums.length;
  let mask = Math.pow(2, len) - 2;
  const r = [[], nums];
  while (mask > 0) {
    let temp = [];
    for (let i = 0; i < len; i++) {
      if ((mask >> i) & 1) {
        temp.push(nums[i])
      }
    }
    r.push(temp);
    mask--;
  }
  return r;
}

/* bfs */
subsets = function (nums) {
  let len = nums.length;
  const r = [[]];
  for (num of nums) {
    let l = r.length;
    for (let i = 0; i < l; i++) {
      let t = r[i].slice(0);
      t.push(num);
      r.push(t);
    }
  }
  return r;
}

/* dfs */
subsets = function (nums) {
  const r = [];
  function dfs (nums, index) {
    r.push(nums);
    for (let i = index; i < nums.length; i++) {
      dfs(nums.slice(0, i).concat(nums.slice(i + 1)), i);
    }
  }
  dfs(nums, 0);
  return r;
}

console.log(subsets([1, 2, 3, 4]))
