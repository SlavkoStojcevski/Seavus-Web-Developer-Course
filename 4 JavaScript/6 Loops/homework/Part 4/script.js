function fullName(first, last) {
  let full = [];
  for (i = 0; i < first.length; i++) {
    full.push(i + 1 + "." + first[i] + " " + last[i]);
  }
  return full;
}
let firstNames = ["Slavko", "Mimi"];
let lastNames = ["Stojchevski", "Stojchevska"];
alert(fullName(firstNames, lastNames));
