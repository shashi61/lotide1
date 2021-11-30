const eqArrays = require("./eqArrays");
const assertArraysEqual = function(value1, value2){
   if(eqArrays(value1, value2)){
    console.log(`✅✅✅ Assertion Passed: ${value1} === ${value2}`);
   } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${value1} !== ${value2}`);
   }  
}
module.exports = assertArraysEqual;