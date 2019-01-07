module.exports = function deepEqual(val1, val2) {
  if(JSON.stringify(val1) === JSON.stringify(val2)) {
    
    // needs more work, look more in depth at built in === in JS

    //for numbers
    if (isNaN(val1) && isNan(val2) && typeof val1 === 'number' && typeof val2 === 'number) {
      return true;
    }

  } else {
    return false;
  }
}
