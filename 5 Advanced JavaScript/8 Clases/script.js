class Animal{
  constructor(name,type,age,size){
    this.name = name;
    this.type = type;
    this.age = age;
    this.size = size;
  }
  eat(animal){
    if(animal && this.type==="herbivore"){
      console.log("The animal "+this.name+" is a herbivore and does not eat other animals");
    }
    if(animal && this.type!=="herbivore"){
      if(animal.size>=(this.size*2)){
        return "The animal "+this.name+" tried to eat the animal "+this.
      }
    }
  }
}
