// Selecting an element by Id and adding it to a variable for later use
/*let myHeader = document.getElementById("myTitle");
console.log(myHeader); // Will give us the whole element node
console.log(myHeader.text); // Will give us the text inside the element*/
// Selecting elements by tag name and adding them to a variable for later use
/*let paragraphs = document.querySelectorAll("p"); 
let firstP = document.querySelector(".myParagraph");
let header = document.querySelector("#myTitle");
console.log(paragraphs); // Will give us an array with 2 paragraphs
console.log(firstP); // Will give us the first paragraph it finds
console.log(header); // Will give us the first header it finds*/
let div = document.querySelector("div");
document.body.append(document.createElement("h2"));
document.querySelector("h2").innerText="New h2 element";
let p = document.querySelectorAll("p");
let alldiv = document.querySelectorAll("div");
let ldiv = alldiv[alldiv.length-1];
let h3=ldiv.querySelector("h3");
let h1=ldiv.querySelector("h1");
let d2p1=alldiv[1].querySelector("p").innerText;
alldiv[1].innerText+="text";
alldiv[alldiv.length-1].querySelector("h1").innerText="changed";
alldiv[alldiv.length-1].querySelector("h3").innerText="changedh3";
console.log(d2p1);