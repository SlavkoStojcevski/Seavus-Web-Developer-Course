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
let data;
function populatetable(list, personorship) {
  if (personorship === "person") {
    let titles =
      "<tr><th>Name</th><th>Height</th><th>Mass</th>" +
      "<th>Gender</th><th>Birth Year</th><th>Homeworld</th>" +
      "<th>Appearances ( Count of movies they appeared in )</th></tr>";
    let information = "";
    let people = [];
    for (person of list) {
      people.push(new Person(person));
    }
    for (person of people) {
      information += `<tr><td> ${person.name} </td><td>${person.height} </td><td>
        ${person.mass}</td><td>${person.gender}</td><td>
        ${person.birth_year}</td><td>${person.homeworld}
        </td><td class='centre'>${person.appearances.length} </td></tr>`;
    }
    document.getElementById("data").innerHTML = titles + information;
  }
  if (personorship === "ship") {
    let titles =
      "<tr><th>Name</th><th>Model</th><th>Manufacturer</th>" +
      "<th>Cost</th><th>Cargo Capacity</th>" +
      "<th>People Capacity ( Max people on board )</th><th>Class</th></tr>";
    let information = "";
    let ships = [];
    for (ship of list) {
      ships.push(new Ship(ship));
    }
    for (ship of ships) {
      information += `<tr><td>${ship.name}</td><td>${ship.model}</td><td>
        ${ship.manufacturer}</td><td>${ship.cost}</td><td>
        ${ship.cargo_capacity}</td><td class='centre'>
        ${ship.people_capacity}</td><td>${ship.ship_class}</td></tr>`;
    }
    document.getElementById("data").innerHTML = titles + information;
  }
  if(data.next) {
    document.getElementById("ne").style.display="block";
  } else {
    document.getElementById("ne").style.display="none";
  }
  if(data.previous){
    document.getElementById("prev").style.display="block";
  } else {
    document.getElementById("prev").style.display="none";
  }
  console.log(data.previous);
}
let peopleorships = "";
document.getElementById("person").addEventListener("click", async function () {
  peopleorships = "people";
  const url = "https://swapi.dev/api/people";
  const promise = await fetch(url);
  const response = await promise.json();
  data = response;
  populatetable(response.results, "person");
});
document.getElementById("ship").addEventListener("click", async function () {
  peopleorships = "starships";
  const url = "https://swapi.dev/api/starships";
  const promise = await fetch(url);
  const response = await promise.json();
  data = response;
  populatetable(response.results, "ship");
});
document.getElementById("previous").addEventListener("click", async function () {
    if(data.previous!=null){
      const url = data.previous;
      const promise = await fetch(url);
      const response = await promise.json();
      populatetable(
        response.results,
        peopleorships == "starships" ? "ship" : "person"
      );
      data=response;
    }
  });
document.getElementById("next").addEventListener("click", async function () {
  if(data.next!=null){
    const url = data.next;
    const promise = await fetch(url);
    const response = await promise.json();
    populatetable(
      response.results,
      peopleorships == "starships" ? "ship" : "person"
    );
    data=response;
  }
});
