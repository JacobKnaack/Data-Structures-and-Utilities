var count = 100;

for (var i = 1; i <= count; i ++) {
  console.log(i);
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz');
  } else if (i % 5 === 0) {
    console.log('buzz');
  } else if (i % 3 === 0) {
    console.log('fizz');
  }
}
