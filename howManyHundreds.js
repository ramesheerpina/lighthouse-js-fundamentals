function howManyHundreds(value) {
  var reminder = value % 100;
  return (value - reminder) / 100;
}
console.log(howManyHundreds(89));
