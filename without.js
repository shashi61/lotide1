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
const assertArraysEqual = function(value1, value2){
   if(eqArrays(value1, value2)){
    console.log(`✅✅✅ Assertion Passed: ${value1} === ${value2}`);
   } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${value1} !== ${value2}`);
   }  
}
function without(value1, value2){
    let newArray = [];
    let flag = false;
for(let value of value1){
  for(let i = 0; i < value2.length; i++){
    if(value === value2[i]){
      flag = true;
      break;
    }
    else{
      flag = false;
    }
  }
  if(flag === true){
    continue;
  }
  else{
    newArray.push(value);
  }   
}
     return newArray;
}
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log(without([1, 2, 3], [1]) )// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
assertArraysEqual(words, ["hello", "world", "lighthouse"]);