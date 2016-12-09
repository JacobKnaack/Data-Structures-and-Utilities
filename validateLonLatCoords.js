'use strict';

function isValidCoordinates(coordinates){
  var coordArray = coordinates.split(',').map(Number);

  if (coordinates.match(/[a-z]/i)) {
    return false;
  }  
  if(coordArray.length >= 3) {
    return false;
  }
  if (coordArray[0] > 90 || coordArray[1] > 180) {
    return false;
  } 
  if(isNaN(coordArray[0]) || isNaN(coordArray[1])) {
    return false;
  } 
    
  return true;
}
