let list = [1, 2, 3, 4, 5];
let sum = 0;
let listed = "";
let added = "";
let i = 0;
for (let n of list) {
  listed += "<li>" + n + "</li>";
  sum += n;
  if (i != list.length - 1) {
    added += n + "+";
  } else {
    added += n + "=" + sum;
  }
  i++;
}
document.querySelector("body").innerHTML =
  "<ul>" + listed + "</ul>" + sum + "<br><br>" + added;
