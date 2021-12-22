let input = prompt("What year you are born?");
let birth = parseInt(input);
let sign = (birth - 4) % 12;
let animal = "Rat";
if (sign == 0) {
    animal = "Rat";
}
else if (sign == 1) {
    animal = "Ox";
}
else if (sign == 2) {
    animal = "Tiger";
}
else if (sign == 3) {
    animal = "Rabbit";
}
else if (sign == 4) {
    animal = "Dragon";
}
else if (sign == 5) {
    animal = "Snake";
}
else if (sign == 6) {
    animal = "Horse";
}
else if (sign == 7) {
    animal = "Goat";
}
else if (sign == 8) {
    animal = "Monkey";
}
else if (sign == 9) {
    animal = "Rooster";
}
else if (sign == 10) {
    animal = "Dog";
}
else {
    animal = "Pig";
}
alert("Your Chinese Zodiac is " + animal);