module.exports = reverseString = (string) => {
  const stringArray = string.split('');

  let start = 0;
  let end = string.length - 1;

  while (start !== end && start < end) {
    let temp = stringArray[start];
    stringArray[start] = stringArray[end];
    stringArray[end] = temp;

    start ++;
    end --;
  }

  return stringArray.join('');
}
