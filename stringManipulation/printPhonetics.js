// function that takes in a string and returns the number of consonants and vowels
module.exports = function printPhonetics(string) {
  var v = 0
  var c = 0

  for (var char of string) {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'y':
        v ++;
        break;
      case ' ':
        break;
      default:
        c ++;
        break;
    }
  }

  return 'there are ' + v + ' vowels and ' + c + ' consonants.'
}
