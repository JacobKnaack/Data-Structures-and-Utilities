// function that takes in two strings and prints whether they are anagrams of each other
module.exports = function isAnagram(word, wordCheck) {
  var format = (word) => {
    return word.trim().toLowerCase().split('').sort().join('');
  }

  var word1 = format(word);
  var word2 = format(wordCheck);

  if (word1 === word2) {
    return true
  }

  return false
}
