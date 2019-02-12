function minNumberInRotateArray (rotateArray) {
  if (rotateArray.length === 0) {
    return 0;
  }
  const len = rotateArray.length;
  if (rotateArray[0] < rotateArray[len - 1]) {
    return rotateArray[0];
  }
  let head = 0, tail = len - 1, mid = (tail - head) >> 1;
  while (true) {
    if (rotateArray[mid] >= rotateArray[0] && rotateArray[mid] > rotateArray[len - 1]) {
      head = mid + 1;
    } else {
      tail = mid;
    }
    mid = ((tail - head) >> 1) + head;
    if (tail - head === 0) {
      return rotateArray[head];
    }
  }
}

/* test */
const a = [3, 3, 4, 5, 1, 1, 2, 3];
console.log(minNumberInRotateArray(a))
