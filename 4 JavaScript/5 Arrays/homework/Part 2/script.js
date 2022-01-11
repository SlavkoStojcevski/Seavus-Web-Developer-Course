function sum(numbers) {
  let sum = 0;
  for (n of numbers) {
    sum += n;
  }
  return sum;
}
function validateNumber(number) {
  if (isNaN(n)) {
    return false;
  } else {
    return true;
  }
}
let numbers = [1, 2, 3, 4, 5];
console.log(sum(numbers));
for (n of numbers) {
  if (!validateNumber(n)) {
    console.log("Error, not a number.");
  }
}
