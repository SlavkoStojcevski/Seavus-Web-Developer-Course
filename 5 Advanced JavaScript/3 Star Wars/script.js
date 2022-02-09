function populatetable(data,personorship){
  if(personorship==="person"){
    let titles="<tr><td>Name</td><td>Height</td><td>Mass</td><td>Gender</td><td>Birth Year</td><td>Appearances ( Count of movies they appeared in )</td></tr>";
    let information="";
    for (person of data) {
      information +=
        "<tr><td>" +
          person.name +
          "</td><td>" +
          person.height +
          "</td><td>" +
          person.mass +
          "</td><td>" +
          person.gender +
          "</td><td>" +
          person.birth_year +
          "</td><td class='centre'>" +
          person.films.length +
          "</td></tr>";
    }
    $("#data").html(
      titles+information
    );
  }
  if(personorship==="ship"){
    let titles="<tr><td>Name</td><td>Model</td><td>Manufacturer</td><td>Cost</td><td>People Capacity ( Max people on board )</td><td>Class</td></tr>";
    let information="";
    for (ship of data) {
      information +=
      "<tr><td>" +
      ship.name +
      "</td><td>" +
      ship.model +
      "</td><td>" +
      ship.manufacturer +
      "</td><td>" +
      ship.cost_in_credits +
      "</td><td class='centre'>" +
      ship.passengers +
      "</td><td>" +
      ship.starship_class +
      "</td></tr>";
    }
    $("#data").html(
      titles+information
    );
  }
}
let peopleorships="";
let page=1;
$("#person").click(function () {
  peopleorships="people";
  $.ajax({
    url: "https://swapi.dev/api/people/?page=1",
    success: function (data) {
      populatetable(data.results,"person");
    },
  });
});
$("#ships").click(function () {
  peopleorships="starships";
  $.ajax({
    url: "https://swapi.dev/api/starships/?page=1",
    success: function (data) {
      populatetable(data.results,"ship");
    },
  });
});
$("#previous").click(function () {
  if(page!=1){page--;}
  $.ajax({
    url: "https://swapi.dev/api/"+peopleorships+"/?page="+page,
    success: function (data) {
      let humanorship=(peopleorships=="starships") ? "ship" : "person";
      populatetable(data.results,humanorship);
    },
  });
});
$("#next").click(function () {
  page++;
  $.ajax({
    url: "https://swapi.dev/api/"+peopleorships+"/?page="+page,
    success: function (data) {
      let humanorship=(peopleorships=="starships") ? "ship" : "person";
      populatetable(data.results,humanorship);
    },
  });
});