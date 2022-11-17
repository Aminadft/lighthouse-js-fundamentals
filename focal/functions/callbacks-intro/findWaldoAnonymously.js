const findWaldo = function(names, found) {
  names.forEach((item, index) => {
    if (item === "Waldo") {
      return found([index]);   // execute callback
    }
  }
  );
}; 

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Found Waldo at index" + index ) ;
  });

