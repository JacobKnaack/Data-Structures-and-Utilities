'use strict';

const codetest = require('../azuquaChallenge.js');

var array1 =  [ "hello", "string", "test", "match", "bacon" ];
var array2 = [ [ "aaa", "match" ], [ "ccc", "ddd", "string", "fff" ], [ "ggg", "test", "abc" ] ];

console.log(codetest.arrayItemCompare(array1, array2));
