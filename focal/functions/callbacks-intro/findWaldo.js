const findWaldo = function(names, found) {
  names.forEach((item, index) => {
    if (item === "Waldo") {
      return found([index]);   // execute callback
    }
  }
  );
}; 
 // const findWaldo = function(names, found) {
//   names.forEach((item, index) => item === "Waldo" ? found(index) : undefined);
// };
 const actionWhenFound = function(index) {
  console.log("Found Waldo at index " + index);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound); 
 const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found([i]);   // execute callback
    }
  }
}
