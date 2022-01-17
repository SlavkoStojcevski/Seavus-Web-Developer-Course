function minMaxSum(list) {
  let min = list[0];
  let max = list[0];
  for (let n of list) {
    if (n < min) {
      min = n;
    }
    if (n > max) {
      max = n;
    }
  }
  let sum = min + max;
  return "Max:" + max + ", Min:" + min + ", Sum:" + sum;
}
arr = [1, 2, 3, 0, 5, 6, 8, 9];
alert(minMaxSum(arr));
