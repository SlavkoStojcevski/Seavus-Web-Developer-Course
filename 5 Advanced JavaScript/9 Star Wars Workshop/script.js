class Person {
  constructor(obj) {
    this.name = obj.name;
    this.height = obj.height;
    this.mass = obj.mass;
    this.gender = obj.gender;
    this.birth_year = obj.birth_year;
    this.homeworld = obj.homeworld;
    this.appearances = obj.films;
  }
}
class ShipDetails {
  constructor(name, model, manufacturer) {
    this.name = name;
    this.model = model;
    this.manufacturer = manufacturer;
  }
}
class Ship extends ShipDetails {
  constructor(obj) {
    super(obj.name, obj.model, obj.manufacturer);
    this.cost = obj.cost_in_credits;
    this.cargo_capacity = obj.cargo_capacity;
    this.people_capacity = obj.passengers;
    this.ship_class = obj.starship_class;
  }
}
function populatetable(data, personorship) {
  if (personorship === "person") {
    let titles =
      "<tr><th>Name</th><th>Height</th><th>Mass</th><th>Gender</th><th>Birth Year</th><th>Homeworld</th><th>Appearances ( Count of movies they appeared in )</th></tr>";
    let information = "";
    let people=[];
    for (person of data) {
      people.push(new Person(person));
    }
    for (person of people) {
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
        person.appearances.length +
        "</td></tr>";
    }
    $("#data").html(titles + information);
  }
  if (personorship === "ship") {
    let titles =
      "<tr><th>Name</th><th>Model</th><th>Manufacturer</th><th>Cost</th><th>Cargo Capacity</th><th>People Capacity ( Max people on board )</th><th>Class</th></tr>";
    let information = "";
    let ships=[];
    for (ship of data) {
      ships.push(new Ship(ship));
    }
    for (ship of ships) {
      information +=
        "<tr><td>" +
        ship.name +
        "</td><td>" +
        ship.model +
        "</td><td>" +
        ship.manufacturer +
        "</td><td>" +
        ship.cost +
        "</td><td>" +
        ship.cargo_capacity +
        "</td><td class='centre'>" +
        ship.people_capacity +
        "</td><td>" +
        ship.ship_class +
        "</td></tr>";
    }
    $("#data").html(titles + information);
  }
}
let peopleorships = "";
let page = 1;
$("#person").click(function () {
  peopleorships = "people";
  $.ajax({
    url: "https://swapi.dev/api/people/?page=1",
    success: function (data) {
      populatetable(data.results, "person");
    },
  });
});
$("#ships").click(function () {
  peopleorships = "starships";
  $.ajax({
    url: "https://swapi.dev/api/starships/?page=1",
    success: function (data) {
      populatetable(data.results, "ship");
    },
  });
});
$("#previous").click(function () {
  if (page != 1) {
    page--;
  }
  $.ajax({
    url: "https://swapi.dev/api/" + peopleorships + "/?page=" + page,
    success: function (data) {
      let humanorship = peopleorships == "starships" ? "ship" : "person";
      populatetable(data.results, humanorship);
    },
  });
});
$("#next").click(function () {
  page++;
  $.ajax({
    url: "https://swapi.dev/api/" + peopleorships + "/?page=" + page,
    success: function (data) {
      let humanorship = peopleorships == "starships" ? "ship" : "person";
      populatetable(data.results, humanorship);
    },
  });
});
