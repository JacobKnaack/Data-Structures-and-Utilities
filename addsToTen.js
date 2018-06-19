//function that takes in an array of numbers and return the first two that add to 10
module.exports = function addsToTen(numArray) {
  var currentNum, track = 0

  for (var i = 0; i < numArray.length; i ++) {
    currentNum = numArray[i]
    
    for (var j = 0; j < i; j ++) {
      track = numArray[j]
      if (i !== j && currentNum + track === 10) {
        return [currentNum, track]
      }
    }  
  }

  return 'no 2 numbers add to 10'
}
