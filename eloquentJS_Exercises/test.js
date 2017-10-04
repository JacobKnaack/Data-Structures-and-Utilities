var func = require(`./${process.argv[2]}`);

if(process.argv[4]) {
  console.log(func(process.argv[3], process.argv[4]));
} else if (process.argv[3]) {
  console.log(func(process.argv[3]));
} else {
  console.log(func());
}


