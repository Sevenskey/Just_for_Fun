var numJewelsInStones = function (J, S) {
  const jMap = {};
  let count = 0;
  for (let i = 0; i < J.length; i++) {
    jMap[J[i]] = 1;
  }
  for (let i = 0; i < S.length; i++) {
    if (jMap[S[i]]) count++;
  }
  return count;
}

console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.log(numJewelsInStones('z', 'ZZ'));
