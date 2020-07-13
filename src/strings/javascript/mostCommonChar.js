// takes in a string and returns the most common character in that string
module.exports = function mostCommonChar(string) {
  var alphaLetters = string.split('').sort();
  var max = {letter: '', count: 0};
  var second = {letter: '', count: 0};
  var countCompare = 0;

  for (var i = 0; i < alphaLetters.length; i++) {
    if (alphaLetters[i + 1] && alphaLetters[i] == alphaLetters[i + 1]) {
      countCompare ++;
    } else {
      countCompare = 0; 
    }

    if (countCompare > max.count) {
      max.letter = alphaLetters[i];
      max.count = countCompare;
    } else if ( countCompare == max.count ) {
      second.letter = alphaLetters[i];
      second.count = countCompare;
    }
  }

  if (max.count < 1) {
    return 'No duplicate letters';
  } else if (second.count == max.count) {
    return 'tie: ' + max.letter + ' and ' + second.letter;
  }
 
  return max.letter
};
