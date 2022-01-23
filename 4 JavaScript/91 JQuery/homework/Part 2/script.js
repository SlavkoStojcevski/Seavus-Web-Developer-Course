let animal = {
  name: prompt("Animal name: "),
  kind: prompt("Animal kind: "),
  speak:function(speach){
    console.log(this.kind+" says: "+speach);
  },
};
animal.speak(prompt("Animal says: "));
