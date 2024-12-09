function isEven(number) {
  if (Number.isInteger(number)) {
    if (number < 0) {
      number = -number;
      console.log(number);
    }
    if (number > 2) {
      number -= 2;
      return isEven(number);
    } else if (number == 1) return false;
    return true;
  }
  console.log("Entry was not a number or an integer");
  return false;
}

console.log(isEven(-603));
