module.exports = function countBs(string) {
  let result = 0;

  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'B') {
     result++; 
    }
  }

  return result;
}
