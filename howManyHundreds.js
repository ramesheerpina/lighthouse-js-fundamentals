function howManyHundreds(value) {
  reminder = value%100;
  return (value-reminder)/100;
}
console.log(howManyHundreds(89));
