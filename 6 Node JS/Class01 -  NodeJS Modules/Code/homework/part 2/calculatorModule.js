export const calculate = (n1, n2, operand) => {
  if (operand == "+") {
    return n1 + n2;
  } else if (operand == "-") {
    return n1 - n2;
  } else if (operand == "*") {
    return n1 * n2;
  } else if (operand == "/") {
    return n1 / n2;
  }
};
