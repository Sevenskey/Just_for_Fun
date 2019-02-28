function Interval(start, end) {
  this.start = start;
  this.end = end;
}
/*
 * 先根据 start 排序，然后 merge
 */
var merge = function (intervals) {
  intervals.sort((a, b) => {
    return a.start - b.start;
  });
  const temp = [];
  const result = [];
  for (let i = 0; i < intervals.length; i++) {
    if (temp.length === 0) {
      temp.push(intervals[i].start);
      temp.push(intervals[i].end);
    } else {
      if (temp[temp.length - 1] < intervals[i].start) {
        let o = new Interval(temp.shift(), temp.shift());
        result.push(o);
        --i;
      } else {
        if (temp[temp.length - 1] < intervals[i].end) {
          temp.pop();
          temp.push(intervals[i].end);
        }
      }
    }
  }
  if (temp.length !== 0) {
    let o = new Interval(temp.shift(), temp.shift());
    result.push(o);
  }
  return result;
}

const a = [[1,3],[2,9],[8,10],[9,18]];
const b = [[1, 4], [4, 5]];
// console.log(merge(a))
// console.log(merge(b))
const c = [new Interval(1, 4), new Interval(2, 3), new Interval(1, 3)];
console.log(merge(c))
