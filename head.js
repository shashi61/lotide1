const head = function(arrayToTest){
    if(arrayToTest.length === 0){
        return undefined;
    }
    else if(Array.isArray(arrayToTest[0])){
        return arrayToTest[0][0];
    }
    return arrayToTest[0];
}

module.exports = head;
