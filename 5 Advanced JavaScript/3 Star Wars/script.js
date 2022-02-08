// $.ajax({
//     url: "https://swapi.dev/api/",
//     success: function (data) {
//         let table=document.createElement("table");
//         data.forEach(function(){
//             table.appendChild()
//         });
//         $("body").appendChild(table);
//     }
//   });
$(".people").click(function(){
    $.ajax({
        url: "https://swapi.dev/api/people",
        success: function (data) {
            let table=document.createElement("table");
            let people=data.results;
            let Luke=people[0];
            //let keys=people[0].keys();
            console.log(Luke);
        }
      });
});
$(".ship").click(function(){
    $.ajax({
        url: "https://swapi.dev/api/starships",
        success: function (data) {
            console.log(data);
        }
      });
});