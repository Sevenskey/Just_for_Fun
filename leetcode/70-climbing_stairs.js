const table = {};

var climbStairs = function (n) {
  if (table[n]) return table[n];
  if (n === 1) return 1;
  if (n === 2) return 2;
  const r = climbStairs(n - 1) + climbStairs(n - 2);
  table[n] = r;
  return r;
}

console.log(climbStairs(50))
