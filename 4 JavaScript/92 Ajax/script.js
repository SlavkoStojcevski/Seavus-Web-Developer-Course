// // Parse the json text file into JS object
// let jsObject = JSON.parse(json);
// // We can create objects into json strings as well
// let newJson = JSON.stringify(jsObject);
// //Parse creates a JS object and stringify creates JSON
// // When a button is clicked we want to make a call to some place on the internet
// button.click(function(){
//   $.ajax({url: "https://jsonplaceholder.typicode.com/users",
//     success: function(result){
//       console.log(result);
//     }});
//   });
$(document).ready(function () {
  function callStarWarsCharacter(number) {
    let result = $("#title");
    $.ajax({
      method: "GET",
      url: "https://swapi.dev/api/people/" + number,
      success: function (data) {
        showInfo(data, result);
      }
    })
  }
  function showInfo(data, resultElement) {
    resultElement.after(`<p>Im and actor. I weight ${data.mass}kg and my height is ${data.height} cm.</p>`);
    resultElement.after(`<h3>My name is ${data.name}</h3>`);
  }
  $("#btn").on("click", function () {
    callStarWarsCharacter(1);
  })
})