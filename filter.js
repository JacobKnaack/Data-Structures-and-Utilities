'use strict';

exports.filter = function(collection, predicate) {
  var results = [];

  var i = collection.length;
  while(i--) {
    collection.filter(function(value) {
      if(value == predicate) {
        results.push(value);  
      }
    })
  }

  return results;
}
