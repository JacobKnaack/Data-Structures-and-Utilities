'use strict';

//write a function that takes a abject and a path then returns the value that the path leads to

exports.get = function(object, path) {
  if(typeof path == 'string') {
    return {'value': eval('object.' + path)} 
  } else {
    var result = 'object';
    for (var i = 0; i < path.length; i ++) {
      if (isNaN(parseInt(path[i]))) {
        result += '.' + path[i];   
      } else {
        result += '[' + path[i] + ']';
      }
    }

    return{
      'value found': eval(result)
    }
  } 
}

//write a function that assigns default properties on an object

exports.defaults = function() {
  var defaultObject = arguments[0];
  var i = arguments.length;
  var j = 1;
  while(i > 0) {
    for (var key in arguments[j]) {
      if (!defaultObject[key]) {
        defaultObject[key] = arguments[j][key];
      }
    }
    i--;
    j++;
  }

  return {
    defaultObject:  defaultObject
  } 
}

// write a function that iterates over an array of elements and returns an array of all elements in the 'predicate' returns truthy for

exports.filter = function(collection, predicate) {
  var results = [];

  if (typeof predicate == 'function') {
    if (Array.isArray(collection)) {
      var i = collection.length;
      while(i--) { 
        if(predicate(collection[i])) {
          results.push(collection[i]);
        }
      } 
    }
  } 

  if (typeof predicate == 'object') {
    var matchGoal = Object.keys(predicate).length, matchNum = 0, matches = [];
    if (Array.isArray(collection)) {
      var i = collection.length;
      while (i--) {
        for (var key in predicate) { 
          if (collection[i][key] == predicate[key]) {
            matchNum++;
            matches.push({[key]: i});
            console.log(matches);
          }
          if (matchNum == matchGoal && matches[i][key] == ) {
          
          }
        }
      }
    } 
  }

  return results;
}
