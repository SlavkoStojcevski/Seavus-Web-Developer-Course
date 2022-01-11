function findNumber(numbers, type) {
  let odd = [];
  let even = [];
  for (let n of numbers) {
    if (n % 2 == 0) {
      even.push(n);
    } else {
      odd.push(n);
    }
  }
  if (type == "odd") {
    return odd;
  } else if (type == "even") {
    return even;
  } else {
      return "Please only choose odd or even";
  }
}
n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alert(findNumber(n, prompt("Odd or even")));