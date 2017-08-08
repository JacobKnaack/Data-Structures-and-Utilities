'use strict';

exports.arrayToList = function(array) {
  var list = {};
 
  function createNestedObject(object, array) {
    for(var i = 0; i < array.length; i++) { 
      if(array.indexOf(array[i]) !== array.length - 1) {
        object.val = array[i];
        object.next = {};
        array.shift();
        createNestedObject(object.next, array);
      } else {
        object.val = array[i];
        object.next = null;
      }
    }
  }

  createNestedObject(list, array);
  return list;
}
