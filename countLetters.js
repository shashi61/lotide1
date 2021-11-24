const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
const countletters = function(line){
    let result = {};
    for(let ch of line){
        if(ch !== ' ')
        {
        if(result[ch]){
            result[ch] += 1;
        }
        else{
            result[ch] = 1;
        }
    }

    }
    return result;
}
console.log(countletters("shashi bawa"));