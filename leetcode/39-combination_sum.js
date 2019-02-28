var combinationSum = function (candidates, target) {
  const result = [];
  function handler (candidates, target, r, index) {
    if (target === 0) {
      result.push(r);
      return ;
    }
    if (target < 0) {
      return ;
    }
    if (target > 0) {
      for (let i = index; i < candidates.length; i++) {
        let rr = r.slice(0);
        rr.push(candidates[i]);
        handler(candidates, target - candidates[i], rr, i);
      }
    }
  }
  handler(candidates, target, [], 0);
  return result;
}

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 6, 7], 0));
