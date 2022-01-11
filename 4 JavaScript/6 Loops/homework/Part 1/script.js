function add(list) {
  let sentence = "";
  for (word of list) {
    sentence += word + " ";
  }
  return sentence;
}
let list = ["I", "am", "Slavko"];
alert(add(list));
