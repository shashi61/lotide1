const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
const eqArrays = function(value1, value2){
    let flag = true;
    if(value1.length !== value2.length){
         return false;
    }
    for(let i = 0; i < value1.length; i++){
        if(value1[i] !== value2[i]){
         flag = false;
        }  
    }
    if(flag === true){
        return true;
    }
 
  return false;
    
}


const eqObjects = function(object1, object2){
  // Extract keys form objects
  const value1 = Object.keys(object1);
  const value2 = Object.keys(object2);
  let flag = true;

  //Check if both arrays have same number of elements
  if(value1.length !== value2.length){
    return false;
  }

  //Loop over values of object
  for(let val of value1){
    //compare object values 
    if(Array.isArray(object1[val]) && Array.isArray(object2[val])){
      const result = eqArrays(object1[val], object2[val]);
      if(!result){
         flag = false;
      }
    }
    else if (object1[val] !== object2[val]){
         flag = false;
    }
  }
  if(flag === true){
    return true;
}
return false;
}
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => false

const cd2 = { c: "1", d: ["2", 3] };
console.log(eqObjects(cd, cd2)); // => false
