let list = [1, 2, 3, 4, 5];
let sum = 0;
for (let n of list) {
  sum += n;
}
document.querySelector("body").innerHTML = "<li>" + list + "</li>" + sum;
