function range(start, end, step) { //function for making a range of numbers in an array, takes a start, end, and step
  var array = [];
  array.unshift(start);
  for (var i = start; i <= (end - 2); i += step) {
    if (end >= i + step) {
      array.push(i + step);
    };
  };
  if (i + step < end) {
  	array.push(end);
  };
  return array;
};

function sum(array) { // sums up numbers in a array
 var total = 0;
 for (var i = 0; i < array.length; i++) {
   total += array[i];
 };
  return total;
};

function arrayToList(array) {
  for (var i = (array.length + 1); i >= 0; i --) {
    var list = {
      value: (array.length + 1),
      rest: null
    }
  }
};
