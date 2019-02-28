var searchRange = function (nums, target) {
  if (nums.length === 0 || nums[0] > target) {
    return [-1, -1];
  }
  let mid = nums.length >> 1 ;
  let head = 0, tail = nums.length - 1;
  let a, b;
  while (head <= tail) {
    if (nums[mid] > target) {
      tail = mid - 1;
    } else if (nums[mid] < target) {
      head = mid + 1;
    } else {
      if (nums[mid] !== nums[mid - 1]) {
        a = mid;
        break;
      } else {
        tail = mid - 1;
      }
    }
    mid = head + ((tail - head) >> 1);
  }
  head = 0, tail = nums.length - 1;
  while (head <= tail) {
    if (nums[mid] > target) {
      tail = mid - 1;
    } else if (nums[mid] < target) {
      head = mid + 1;
    } else {
      if (nums[mid] !== nums[mid + 1]) {
        b = mid;
        break;
      } else {
        head = mid + 1;
      }
    }
    mid = head + ((tail - head) >> 1);
  }
  if (a === undefined) return [-1, -1];
  return [a, b];
}

const a = [5, 7, 7, 8, 8, 10];
console.log(searchRange(a, 11))
