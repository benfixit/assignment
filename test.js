const mergeInterval = require('./index');

// TEST CASE

// 1. Sample input less than 2 items

console.log(mergeInterval([
    {sequence: 1, start: 1, end: 20, action: "ADDED"}
  ], 7))



// 2. Sample input has more than 2 items

console.log(mergeInterval([
    {sequence: 1, start: 1, end: 20, action: "ADDED"},
    {sequence: 2, start: 55, end: 58, action: "ADDED"},
    {sequence: 3, start: 60, end: 89, action: "ADDED"},
    {sequence: 4, start: 15, end: 31, action: "ADDED"},
    {sequence: 5, start: 10, end: 15, action: "ADDED"}
  ], 7))



// 3. Sample input has added and removed items

console.log(mergeInterval([
    {sequence: 1, start: 1, end: 20, action: "ADDED"},
    {sequence: 2, start: 55, end: 58, action: "ADDED"},
    {sequence: 3, start: 60, end: 89, action: "ADDED"},
    {sequence: 4, start: 15, end: 31, action: "ADDED"},
    {sequence: 5, start: 10, end: 15, action: "ADDED"},
    {sequence: 6, start: 1, end: 20, action: "REMOVED"},
  ], 7))

  
  