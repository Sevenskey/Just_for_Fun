function replaceSpace(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      str = str.substring(0, i) + '%20' + str.substring(i + 1, str.length);
    }
  }
  return str;
}
