// function that takes in a string and returns the same string but replaces adjacent duplicates with their count
module.exports = function duplicateCount(string) {
  var result = [];
  var dup = 0

  for (var i = 0; i < string.length; i ++) {
    if (result[result.length - 1] != string[i]) {
      result.push(string[i]);
    }

    if (string[i] === string[i + 1]) {
      dup ++;      
    } else {
      result.push(dup+1);
      dup = 0;
    }
  }

  return result.join('');
}
