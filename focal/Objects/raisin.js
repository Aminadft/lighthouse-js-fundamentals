// const raisinAlarm = function (cookie) {
// let result = "All good!";

// for (ingredient of cookie)
// {
//   if (ingredient === "🍇")
//   {
//     result = "Raisin alert!"
//   }
// }
// return result;
// }
// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


const raisinAlarmArray = function (arrayOfIngredients) {
  let result = []

for (ingredients of arrayOfIngredients)
{
  let res = "All Good";
  // console.log(ingredients);
  for (ingredient of ingredients)
  {

    if (ingredient === "🍇") 
    {
      res = "Raisin alert!"
    }
  }
  result.push(res);

}

return result;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],   
    ["🍫", "🍇", "🍫", "🍫", "🍇"],    
    ["🍫", "🍫", "🍫"],  
    ])
);


/* expected output
["Raisin alert!", "Raisin alert!", "All good!"]
*/