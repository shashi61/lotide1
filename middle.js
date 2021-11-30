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
      return middleArray;
    }
}
module.exports = middle;