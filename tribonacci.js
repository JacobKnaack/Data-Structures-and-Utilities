'use strict';

export default tribonacci (signature, n) => {
  let result = [];

  if (n < 3) {
    result = signature.slice(0, 3);
  } else {
    result = signature.slice(0);

    function add (a, b) {
      return a + b;
    }

    while (result.length < n) {
      let signSum = signature.reduce(add, 0);

      result.push(sigSum);
      signature.shift();
      signature.push(sigSum);
    }
  }

  return result;
}
