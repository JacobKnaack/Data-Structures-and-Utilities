// function that takes in a string and replaces a specified character with a given substitute
module.exports = function replaceCharacter(string, replace, value) {
  var stringArray = string.split('');

  for (var char in stringArray) {
    if (stringArray[char] === replace) {
      stringArray[char] = value;
    }
  }

  return stringArray.join('');
}
