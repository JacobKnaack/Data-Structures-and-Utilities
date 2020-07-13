'use strict';

exports.filter = function (collection, test) {
  var results = [];

  for (var i = 0; i < collection.length; i++) {
    if (test(array[i]))
      results.push(array[i]);
  };
  return results;
};
