console.log("****for Loop****")
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i])
}

// Write a for loop that prints out the contents of ingredients:
console.log("****While Loop****")
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i])
  i++
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("****While Loop and printing list items backwards****");
let ind = 0;
while (ind < ingredients.length) {
  ind++
  console.log(ingredients[(ingredients.length)-ind])
}