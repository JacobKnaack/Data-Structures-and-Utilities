'use strict';

function cakes(recipe, available) { // returns the number of times a recipe can be made with available ingredients
  var rNum = [];

  if(Object.keys(recipe).length == 0 || Object.keys(available).length == 0) {
    return 0;
  }

  for (var rKey in recipe) {
    for (var aKey in available) {
      if(Object.keys(recipe).length > Object.keys(available).length) {
        return 0;
      }
      if( aKey == rKey ) {
        rNum.push(Math.floor(available[aKey] / recipe[rKey]));
        console.log(rNum);
      } 
    }
  }
  
  Array.min = function(array) {
    return Math.min.apply(Math, array);
  }
  
  return Array.min(rNum);
}
