//write a function with two inputs(current, history). Current is an array of strings and history is an array of arrays of strings.
//returns two object: newStrings & newHistory. newStrings is an array containing only strings unique to history.  newHistory is an array of arrays of strings which simply removes the first index and concats newStrings to the end.

'use strict';

exports.arrayItemCompare = function(current, history) {
  if (Array.isArray(current) == true && Array.isArray(history) == true) {
    var newStrings = current;
    var newHistory = history;
    var flatHistory = [].concat.apply([], history);

    for (var i = 0; i < flatHistory.length; i ++) {
      if (newStrings.indexOf(flatHistory[i]) !== -1) {
         newStrings.splice(newStrings.indexOf(flatHistory[i]), 1);
      }
    }

    newHistory.shift();
    newHistory.push(newStrings);
    return {
      newString: newStrings,
      newHistory: newHistory
    }; 
  } else { 
    return 'function requires proper arrays';
  }
};

//written by Jacob Knaack 11/19/2016
