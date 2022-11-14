function whatToDoForLunch(hungry, availableTime)
if (hungry === true) {
  if (availableTime < 20) { }
  return console.log("Pick up snack or food you prepped at home");
} else if (availableTime >= 20 && availableTime <= 30) {
  return console.log("Take a break and cook or get takeout");
} else if (availableTime > 30) {
  console.log("Stay focused program is intense!");
}
} else {
  return console.log("I am not hungry, and should return to work!");
}