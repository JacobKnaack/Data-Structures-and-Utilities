module.exports = function arrayToList(array) {
  if(Array.isArray(array) === false) {
    array = array.split(',');
  }
  let result = {};
  
  function createNestedObject(object, arr) {
    for (var i = 0; i < arr.length; i++) {
      if(arr[i + 1]) {
        object.value = arr[i];
        object.rest = {};
        arr.shift();
        createNestedObject(object.rest, arr);
      } else {
        object.value = arr[i];
        object.rest = null;
      }
    }
  }

  createNestedObject(result, array);
  return result;
}
