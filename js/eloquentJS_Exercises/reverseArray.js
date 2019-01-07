module.exports = function reverseArray(array) {
  if (Array.isArray(array) === false) {
   array = array.split(',');
  } 
  var result = [];


  for (var i = 0; i < array.length; i++) {
    result.unshift(array[i]);
  }

  return result;
}
