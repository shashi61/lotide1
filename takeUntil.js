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
const takeUntil = function(array, callback) {
    const results = [];
    for(let item of array){
       if(callback(item)){
           break;
       }
       else{
           results.push(item);
       }
    }
   return results; 
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);