module.exports = function isEven(num) {
  var result = Math.abs(num) - 2;
  if( result === 0) {
    return true;
  } else if( result === 1 ) {
    return false;
  } else {
    return isEven(result);
  }
}
