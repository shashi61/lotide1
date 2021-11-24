const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
const eqArrays = function(value1, value2){
    let flag = true;
    if(value1.length === value2.length){
    for(let i = 0; i < value1.length; i++){
        if(value1[i] !== value2[i]){
         flag = false;
        }  
    }
    if(flag === true){
        return true;
    }
    else{
    return false;
    }
}
else{
    return false;
}
}
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); 
// console.log(eqArrays(["1", "2"], ["1", "2", "3"])); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);