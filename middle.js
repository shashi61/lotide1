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
const middle = function(value){
    const middleArray = [];
    const arraylength = value.length;
    //if array.length is 1 or 2 => return empty
    if(arraylength === 1 || arraylength === 2){
        return middleArray;
    }
   else if(arraylength % 2 !== 0){
        middleArray.push(value[Math.floor(arraylength/2)]);
        return middleArray;
    }
   else if(arraylength % 2 === 0){
    middleArray.push(value[(arraylength/2)-1]);
     middleArray.push(value[arraylength/2]);

    }
}
console.log(middle([1]))
console.log(middle([1, 2]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5,6]));