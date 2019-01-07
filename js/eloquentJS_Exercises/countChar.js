module.exports = function countChar(string, char) {
  let result = 0;

  for(var i = 0; i < string.length; i++) {
    if(string[i] === char) {
      result++;
    }
  }

  return result;
}
