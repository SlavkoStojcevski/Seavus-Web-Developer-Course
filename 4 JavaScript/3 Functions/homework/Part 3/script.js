function atm(withdraw) {
  let balance = 20000;
  if (withdraw <= balance) {
    return (
      "Ammount withdrawn: " +
      withdraw +
      ", amount left: " +
      (balance - withdraw) +
      "."
    );
  } else {
    return "Not enough money.";
  }
}
alert(atm(parseInt(prompt("How much do you want to withdraw?"))));
