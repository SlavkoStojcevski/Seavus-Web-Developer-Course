function maps(anarray, afunction) {
  for (let i = 0; i < anarray.length; i++) {
    anarray[i] = afunction(anarray[i]);
  }
  return anarray;
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
console.log(filters(array,n=>n%2==0));
console.log(maps(array,n=>n*2));
foreach(array, (n) => console.log(n));
