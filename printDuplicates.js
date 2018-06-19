// function that takes in a string and returns all characters that have duplicates
module.exports = {
  nested: function printDupsNested(string) {
    var dups = [];
    var currentChar = '';
    for (var i in string) {
      currentChar = string[i]

      for (var j in string) {
        if (currentChar === string[j] && i !== j && !dups.includes(string[j])) {
          dups.push(string[j]);
        }
      }
    }
  
    if (dups.length === 0) {
      dups.push('no duplicate letters');
    }

    return dups;
  },

  hash: function printDupsHash(string) {
    var dups = [];
    var found = {};

    for (var i of string) {
      if (found[i] === true && !dups.includes(i)) {
        dups.push(i);
      }

      found[i] = true
    }
  
    if ( dups.length === 0 ) {
      dups.push('no duplicates found');
    }
    
    return dups;
  },
}
