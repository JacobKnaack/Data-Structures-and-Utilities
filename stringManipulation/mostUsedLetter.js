// function that returns the most used letter in a string
module.exports = function mostUsedLetter(string) {
  var found = {}

  for (var i of string) {
    if (found[i]) {
      found[i] ++;
    } else {
      found[i] = 1;
    }
  }
  
  var maxCount = {letter: null, num: 0};
  for (var count in found) {
    if (found[count] > maxCount.num) {
      maxCount.letter = count;
      maxCount.num = found[count];
    }
  }

  return maxCount.letter;
}
