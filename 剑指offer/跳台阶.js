function jumpFloor(n) {
  let r1 = 0, r2 = 0, r = 0;
  for (let i = 1; i <= n; i++) {
    if (i === 1 || i === 2) {
      r = r1 = r2 = 1;
    } else {
      r = r1 + r2;
      r1 = r2;
      r2 = r;
    }
  }
  return r;
}
