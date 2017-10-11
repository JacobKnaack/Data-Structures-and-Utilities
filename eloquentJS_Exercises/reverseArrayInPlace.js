module.exports = function reverseArrayInPlace(array) {
  if(Array.isArray(array) === false) {
    array = array.split(',');
  }
  var reference = array.slice();
  var tracker = array.length - 1;

  while(tracker >= 0) {
    array[(array.length - 1) - tracker] = reference[tracker];
    tracker--;
  }
 
  return array;
}
