function add(n1, n2) {
  return n1 + n2;
}
function subtract(n1, n2) {
  return n1 - n2;
}
function multiply(n1, n2) {
  return n1 * n2;
}
function divide(n1, n2) {
  return n1 / n2;
}
function CelsiustoFarenheit(celsius) {
  return celsius * 1.8 + 32;
}
function FarenheittoCelsius(farenheit) {
  return (farenheit - 32) * (5 / 9);
}
/*let unit = prompt("What value do you have?");
if (unit == "farenheit") {
  alert(FarenheittoCelsius(prompt("Farenheit:")));
} else {
  alert(CelsiustoFarenheit(prompt("Celsius:")));
}*/
function age(birthYear) {
  return new Date().getFullYear() - birthYear;
}
alert("You are "+age(prompt("What year you are born?"))+" years old.");
