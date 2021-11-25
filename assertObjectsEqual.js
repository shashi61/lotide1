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
const assertObjectsEqual = function(object1, object2) {
    const inspect = require('util').inspect;
    if (eqObjects(object1, object2)) {
        console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
      } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
      }
 
};
assertObjectsEqual({s1:1, b:[2,4]},{s1:1, b:[2,4]});