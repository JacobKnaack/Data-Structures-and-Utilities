module.exports = function listToArray(list) {
  console.log(list); 
  if (typeof list === 'string') {
    JSON.parse(list);
  }

  var result = [];

  function flattenObject(object, array) {
    if (object.value) {
      array.push(object.value);
    } 
  
    if (object.rest) {
      if (object.rest === null) {
        return array;
      } else {
       flattenObject(object.rest, array) 
      }
    }
  }

  flattenObject(list, result);
  return result;
}
