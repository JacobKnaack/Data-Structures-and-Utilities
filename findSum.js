// function that takes in an array of numbers and a sum and return all numbers in the array that add up to the sum.
module.exports = function findSum(sum, nums) {
  var pairs = []
  var found = {}
  for (var i of nums) {
    console.log(found[sum - i])
    if(found[sum - i] === true) {
      pairs.push([i, sum - i])
    }

  found[i] = true
  }

  return pairs
}
