/*let person={name:"Slavko",lastName:"Stojchevski",age:31,company:"Fragment"}
alert(person.lastName);*/
//let hotel=new Object();
/*let hotel={}
hotel.name="Hilton";
hotel.rooms=99;
hotel.booked=19;
hotel.checkAvailability=function(){
  return this.rooms-this.booked;
}
alert(hotel.checkAvailability());*/
/*let trainer = { 
	name :  "Stefan",
	lastName: "Stefanovski",
	academy: "SEDC",
	lecture: "Objects"
}
delete(trainer.lecture);
trainer.age=31;
trainer.getFullName=function(){return this.name+this.lastName;}
alert(trainer.getFullName());*/
let car = {
  model: "yugo",
  color: "red",
  year: 1990,
  fuel: 50,
  fuelConsumption: 6.6,
  fuel: function (distance) {
    return (distance / 100) * this.fuelConsumption;
  },
};
alert(car.fuel(prompt("Distance: ")));
