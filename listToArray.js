'use strict';

function listToArray(list) {
  var array = [];
  var nullReached = false;
  
  function objectParse(object) {  // goes through object and pushes values into an array
    for (var key in object) {
      if (object[key] == null) {
        nullReached = true;
        return;
      }
      array.push(object[key])
    }
  }
  
  while(nullReached == false) { // runs through list array and called object parser on last item in array
    if( array.length == 0) {
      objectParse(list)
    } else {
      objectParse(array[array.length - 1])
    }
  }
  
  for (var j = 0;  j < array.length; j++) { // removes all objects from array after values have been added
    if (typeof array[j] == 'object') {
      array.splice(j, 1)
    }
  }
  
  return array;
} 

// a much more effcient way :

function betterListToArray(list) {
  var array = [];
  for (var node = list; node; node = node.next) {
    array.push(node.value);
  }
  return array;
}
