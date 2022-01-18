//var elem = document.getElementById("btnHello");
/*elem.onclick = function () {
  alert("Hello World");
};
function hello(){
  alert("Hello World");
}*/
//elem.onclick=hello;
//elem.addEventListener('click',function(){alert("hi");});
let paragraph = document.getElementById("myParagraph");
let btn = document.getElementById("myBtn");
function changeElement(element) {
  element.style.color = "red";
  element.style.backgroundColor = "blue";
  element.style.fontSize = "34px";
}
btn.addEventListener("click", function () {
  changeElement(paragraph);
});
