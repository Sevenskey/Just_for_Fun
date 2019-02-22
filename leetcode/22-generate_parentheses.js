/* 写的什么jb */
var _generateParenthesis = function (n) {
  function dfs (r, layer, lnum) {
    if (2 * n - layer + 1 < lnum) {
      return [];
    }
    if (lnum === 0) {
      let rr = [];
      r.forEach((e) => {
        rr = rr.concat(dfs([e + '('], layer + 1, 1));
      });
      return rr;
    }
    if (layer === 2 * n) {
      let rr = [];
      r.forEach((e) => {
        rr = rr.concat(e + ')');
      })
      return rr;
    } else if (2 * n - layer + 1 > lnum) {
      let rr = [];
      r.forEach((e) => {
        rr = rr.concat(dfs([e + '('], layer + 1, lnum + 1));
        rr = rr.concat(dfs([e + ')'], layer + 1, lnum - 1));
      })
      return rr;
    } else if (2 * n - layer + 1 === lnum) {
      let rr = [];
      r.forEach((e) => {
        rr = rr.concat(dfs([e + ')'], layer + 1, lnum - 1))
      })
      return rr;
    }
  }
  return dfs(['('], 2, 1);
}

/* 化简后 */
var generateParenthesis = function (n) {
  let r = [];
  function dfs (s, layer, lnum) {
    if (2 * n - layer + 1 < lnum) {
    } else if (lnum === 0) {
      dfs(s + '(', layer + 1, 1);
    } else if (layer === 2 * n) {
      r.push(s + ')');
    } else if (2 * n - layer + 1 > lnum) {
      dfs(s + '(', layer + 1, lnum + 1);
      dfs(s + ')', layer + 1, lnum - 1);
    } else if (2 * n - layer + 1 === lnum) {
      dfs(s + ')', layer + 1, lnum - 1);
    }
  }
  dfs('(', 2, 1);
  return r;
}

console.log(generateParenthesis(3));
