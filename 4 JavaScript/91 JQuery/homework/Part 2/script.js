let text="<input id='text' placeholder='text'>";
let color="<input id='color' placeholder='color'>";
let button="<button>generate h1</button>";
let h3="<h3></h3>";
let h1="<h1></h1>";
function isColor(strColor){
  var s = new Option().style;
  s.color = strColor;
  return s.color == strColor;
}
$("body").prepend(text);
$("body").append(color);
$("body").append(button);
$("body").append(h3);
$("button").after(h1);
$("button").on("click",function(){
  let color=$("#color").val();
  if(isColor(color)){
    $("h1").text($("#text").val());
    $("h1").css("color",$("#color").val());
  } else{
    $("h1").text("Please enter a valid color!");
  }
});