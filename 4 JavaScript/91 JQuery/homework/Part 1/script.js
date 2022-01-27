let input="<input>";
let button="<button>print</button>";
let h1="<h1></h1>";
$("body").prepend(input);
$("body").append(button);
$("body").append(h1);
$("button").on("click",function(){
  $("h1").text("Hello there "+$("input").val()+"!");
  $("h1").css("color","green");
});