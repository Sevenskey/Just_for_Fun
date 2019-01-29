/* 超时 */
function GetNumberOfK (data, k) {
  let firstK = getFirstK(data, k);
  let lastK = getLastK(data, k);
  if (firstK === -1) {
    return 0;
  }
  return lastK - firstK + 1;
}

function getFirstK (data, k) {
  let head = 0;
  let tail = data.length - 1;
  let mid = data.length >> 1;
  while (true) {
    if (k > data[mid]) {
      head = mid + 1;
    } else if (mid - 1 >= 0 && k === data[mid - 1]) {
      tail = mid - 1;
    } else if (k === data[mid]) {
      return mid;
    } else {
      tail = mid - 1;
    }
    mid = head + ((tail - head) >> 1);
    if (head === tail && k !== data[mid]) {
      break;
    }
  }
  return - 1;
}

function getLastK(data, k) {
  let head = 0;
  let tail = data.length - 1;
  let mid = data.length >> 1;
  while (true) {
    if (k > data[mid]) {
      head = mid + 1;
    } else if (mid + 1 < data.length && k === data[mid + 1]) {
      head = mid + 1;
    } else if (k === data[mid]) {
      return mid;
    } else {
      tail = mid - 1;
    }
    mid = head + ((tail - head) >> 1);
    if (head === tail && k !== data[mid]) {
      break;
    }
  }
  return - 1;
}

/* test */
const a = [1, 2, 3, 3, 3, 4, 5, 6, 6, 7];
const k = 1;

console.log(GetNumberOfK(a, k))
