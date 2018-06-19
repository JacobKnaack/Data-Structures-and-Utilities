// function that takes in a string and returns the first non repeating character
module.exports = {
  printNonRepeating: function printNoRepeatChar(string) {
    var found = {}

    for (var i of string) {
      if (found[i]) {
        found[i] ++;
      } else {
        found[i] = 1;
      }
    }

    for (var count in found) {
      if (found[count] === 1) {
        return count;
      }
    }

    return 'all characters have duplicates';
  },

  printCharCount: function charCount(string) {
    var found, most = {}

    for (var i of string) {
      if (found[i]) {
        found[i] ++
      } else {
        found[i] = 1
      }
    }

    for (var count in found) {
      
    }
  }
}
