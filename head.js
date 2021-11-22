const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
const head = function(arrayToTest){
    if(arrayToTest.length === 0){
        return undefined;
    }
    else if(Array.isArray(arrayToTest[0])){
        return arrayToTest[0][0];
    }
    return arrayToTest[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);