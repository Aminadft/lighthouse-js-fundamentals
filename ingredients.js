const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
console.log("ingredients");
let i = 0;
while (i < ingredients.Length) {
  console.log(ingredients[i]);
  i++;
}
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
console.log("Ingredients backwards:");
for (let i = 7; i >= 0; i--) {
  console.log(ingredients[i]);
}
