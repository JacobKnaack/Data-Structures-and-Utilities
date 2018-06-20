// function that takes in an array of strings and returns an array those strings sorted by length
module.exports = {
  normalSort: function sortByLength(stringArray) {
    return stringArray.sort(function(a, b) {
      return b.length - a.length;
    })
  },

  manualSort: function manualSort(stringArray) {
    for (var i = 0; i < stringArray.length; i++) {
      for (var j = 0; j <= i; j++) {
        if (stringArray[j+1] && stringArray[j+1].length > stringArray[j].length) {
           var temp = stringArray[j];
           stringArray[j] = stringArray[j+1];
           stringArray[j+1] = temp;
        }
      }
    }

    return stringArray;
  }
}
