function tellStory(name, mood, activity) {
  return (
    "This is " +
    name +
    ". " +
    name +
    " is a nice person. Today they are " +
    mood +
    ". They are " +
    activity +
    " all day. The end."
  );
}
var person = ["Slavko", "happy", "working"];
alert(tellStory(...person));
