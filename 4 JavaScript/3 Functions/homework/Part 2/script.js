function dogAge(humanYears, dogYears) {
  if (humanYears) {
    return humanYears * 7;
  } else {
    return dogYears / 7;
  }
}
console.log(dogAge(0, 7));
