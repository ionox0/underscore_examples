//underscore examples

'use strict';

var _ = require('./Underscore.js');

//map: takes in array/function, returns new array after performing function on each value
var array = [1,2,3,4];
var x = _.map(array, function(num){return num*3;});
console.log(x);

//reduce: takes in array/function, iterates through function with each value of array
x = _.reduce(array, function(memo, num){ return memo + num; }, 0);
console.log(x);

//union: lists unique items in order
x = _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
console.log(x);

//zip: "zips" up multiple arrays
x = _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
console.log(x);

//extend: copies multiple object properties into new, bigger object
x = _.extend({name: 'moe'}, {age: 50}, {asdf: "jkl;"});
console.log(x);

//pick: return new object with only selected properties of it remaining
x = _.pick({name: 'moe', age: 50, userid: 'moe1'}, 'name');
console.log(x);

//invert: converts object's keys to values and vice-versa
x = _.invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"});
console.log(x);

//pluck: takes in multiple objects, returns list of each one's selected property
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
x = _.pluck(stooges, 'name');
console.log(x);
