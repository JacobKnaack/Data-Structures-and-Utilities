'use strict';
/*
* @param {recipe}: Object - key value pairs of ingredients
* @param {available}: Object - key valie pairs of ingredients
* Takes in two objects and returns a number for how many times the recipe can be made
*/

function cakes(recipe, available) {
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

module.exports = cakes;
