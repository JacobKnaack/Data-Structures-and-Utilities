// function that returns true or false if a word is a palindrome
module.exports = function isPalindrome(wordString) {
  //var wordStringArray = wordString.split('')

  for (var i = 0; i < wordString.length; i ++) {
    if (wordString[i] !== wordString[wordString.length - (i + 1)]) {
      return false
    }
  }

  return true
}
