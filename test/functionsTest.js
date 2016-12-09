'use strict';

const _ = require('lodash');
//const get = require('./functions.js').get;
//const defaults = require('./functions.js').defaults;
//const filter = require('./functions.js').filter;
const higherFilter = require('./filter.js').filter;

const path = ['a', '0', 'b', 'c'];
const object = {'a': [{'b': {'c': 3}}]};

var foo = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
}

var bar = {
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5
}

var baz = {
  c: 1,
  d: 2,
  e: 3,
  f: 4,
  g: 5,
  h: 6
}

var boo = {
  d: 1,
  e: 2,
  f: 3, 
  g: 4, 
  h: 5
}

var users = [
  {'user': 'barney', 'age': 36, 'active': true},
  {'user': 'fred', 'age': 40, 'active': false} 
]

//console.log(_.defaults(foo, bar, baz, boo));
//console.log(defaults(foo, bar, baz, boo));
//console.log(filter(users, function(o) { return !o.active; }));
//console.log(filter(users, {'age': 36, 'active': true})); 

console.log(higherFilter(users, {'age': 36}));
