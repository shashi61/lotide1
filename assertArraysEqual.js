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
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,1],[1,2,3]);