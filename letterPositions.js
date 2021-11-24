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
const letterPositions = function(sentence) {
    const results = {};
    for(let ch = 0; ch < sentence.length; ch++){
        if(sentence[ch]!== ' ')
        {
            if(results[sentence[ch]]){
                results[sentence[ch]].push(ch); 
            }
            else{
                results[sentence[ch]] = [ch];  
            }

    }

    }
    return results;
  };
  console.log(letterPositions("shashi"));
  assertArraysEqual(letterPositions("hello").e, [1]);