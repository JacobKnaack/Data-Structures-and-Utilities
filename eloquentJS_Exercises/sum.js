module.exports = function sum(numArray) {
  if (typeof numArray == 'string') numArray = numArray.split(',');
  let result = 0;

  for (var i = 0; i < numArray.length; i ++) {
    result += parseInt(numArray[i]); 
  }

  return result;
}
