// a function that takes in a word string and lists all the differnest letter combinations
module.exports = function listPermutations(string) {
  if (string.length < 2) return string

  var perms = []
  
  for (var i = 0; i < string.length; i ++) {
    // hold a character in place
    var char = string[i]

    // avoiding duplicates
    if (string.indexOf(char) != i)
      continue;

    // build a substring made up the letters around the base char
    var subString = string.slice(0, i) + string.slice(i + 1, string.length)

    // recursively call this function on the substring for each the base char
    for (var subPerm of listPermutations(subString))
      perms.push(char + subPerm)
  }

  return perms
}
