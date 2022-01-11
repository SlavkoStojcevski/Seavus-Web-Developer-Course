function minMaxSum(list) {
  let min = Math.min(...list);
  let max = Math.max(...list);
  let sum = min + max;
  return "Max:" + max + ", Min:" + min + ", Sum:" + sum;
}
arr = [1, 2, 3, 0, 5, 6, 8, 9];
alert(minMaxSum(arr));
