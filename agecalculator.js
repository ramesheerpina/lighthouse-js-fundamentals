function ageCalculator(name, YOB, currentYear) {
  var personAge = currentYear - YOB;
  return name + " is " + personAge + " years old";
}
console.log(ageCalculator("Rene", 1987, 2019));