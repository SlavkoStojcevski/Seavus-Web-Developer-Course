let recepie_Name = prompt("Recepie name: ");
let ingredients_Number = prompt("Number of ingredients: ");
let recepie = [];
for (let i = 1; i <= ingredients_Number; i++) {
  recepie.push(prompt("Ingredient number " + i + ": "));
}
let ingredients = "";
for (let ingredient of recepie) {
  ingredients += "<tr><td><li>" + ingredient + "</li></td></tr>";
}
document.querySelector("body").innerHTML =
  "<table><tr><th><h1>" +
  recepie_Name +
  "</h1></th></tr>" +
  "<ul>" +
  ingredients +
  "</ul></table>";
document.querySelector("table").style.border = "1px solid black";
document.querySelector("th").style.border = "1px solid black";
let td = document.querySelectorAll("td");
for (data of td) {
  data.style.border = "1px solid black";
}
