//-------------- Bài 1 -----------------//
function maxNumber(...args) {
  if (args.length === 0) {
    return null;
  }
  const max = args.reduce((MaxNm, num) => {
    return num > MaxNm ? num : MaxNm;
  }, args[0]);
  return max;
}
console.log(maxNumber(1, 2, 3, 4, 5, 6));
