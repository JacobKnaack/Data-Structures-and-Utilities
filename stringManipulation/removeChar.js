 // function that removes a supplies character from a string
module.exports = function removeChar(char, string) {
  // very quick and easy
  //return string.split(char).join('');

  // more brute force
  var result = '';
  for (var letter in string) {
    if (string[letter] !== char) {
      result += string[letter];
    }
  }

  return result;
}
