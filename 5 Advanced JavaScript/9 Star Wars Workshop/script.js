class ShipDetails{
  constructor(name,model,manufacturer){
    this.name = name;
    this.model = model;
    this.manufacturer = manufacturer;
  }
}
class Ship extends ShipDetails{
  constructor(name,model,manufacturer,cost,cargo_capacity,people_capacity,ship_class){
    super(name,model,manufacturer);
    this.cost = cost;
    this.cargo_capacity = cargo_capacity;
    this.people_capacity = people_capacity;
    this.ship_class = ship_class;
  }
}
function populatetable(data,personorship){
  if(personorship==="person"){
    let titles="<tr><th>Name</th><th>Height</th><th>Mass</th><th>Gender</th><th>Birth Year</th><th>Homeworld</th><th>Appearances ( Count of movies they appeared in )</th></tr>";
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
          "</td><td>" +
          person.homeworld +
          "</td><td class='centre'>" +
          person.films.length +
          "</td></tr>";
    }
    $("#data").html(
      titles+information
    );
  }
  if(personorship==="ship"){
    let titles="<tr><th>Name</th><th>Model</th><th>Manufacturer</th><th>Cost</th><th>Cargo Capacity</th><th>People Capacity ( Max people on board )</th><th>Class</th></tr>";
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
      "</td><td>" +
      ship.cargo_capacity +
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