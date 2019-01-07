module.exports = function range(start, end, step) {
  start = parseInt(start);
  end = parseInt(end);
  step = parseInt(step);

  let result = [];

  if (step == undefined) {
    for (var i = start; i <= end; i ++) {
      result.push(i);
    }
  } else {
    for (var i = start; i <= end; i += step) {
      result.push(i);
    }
  }

  return result;
}
