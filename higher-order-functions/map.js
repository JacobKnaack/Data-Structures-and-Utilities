const map = (array, transformation) => {
  var mapped = []

  for (var i = 0; i < array.length; i++) {
    mapped.push(transformation(array[i]))
  }
  return mapped
}

export default map
