function FindPath (root, expectNumber) {
  function handler (pRoot, sum) {
    if (pRoot === null) {
      if (sum === expectNumber) {
        return true;
      } else {
        return false;
      }
    }
    return handler(pRoot.left, sum + pRoot.val);
  }
}
