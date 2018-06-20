// A function that takes in a sentence and prints the word order backwards
module.exports = function reverseSentence(string) {
  var sentenceArray = string.split(' ');
  var start = 0;
  var end = sentenceArray.length -1;

  while (start < end) {
    let temp = sentenceArray[start];
    sentenceArray[start] = sentenceArray[end];
    sentenceArray[end] = temp;

    start ++;
    end --;
  }

  return sentenceArray.join(' ');
}
