function maps(anarray, afunction) {
  let newArray = [];
  for (let i = 0; i < anarray.length; i++) {
    newArray.push(afunction(anarray[i]));
  }
  return newArray;
}
function filters(anarray, afunction) {
  let newArray = [];
  for (let i = 0; i < anarray.length; i++) {
    if (afunction(anarray[i])) {
      newArray.push(anarray[i]);
    }
  }
  return newArray;
}
function foreach(anarray, afunction) {
  for (let i = 0; i < anarray.length; i++) {
    afunction(anarray[i]);
  }
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(maps(array, (n) => n * 2));
console.log(filters(array, (n) => n % 2 == 0));
foreach(array, (n) => console.log(n));
