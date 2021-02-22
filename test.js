const mergeInterval = require('./index');

// TEST CASE

/**
 * 1. Sample input less than 2 items
 * 
 * Expected result => [ [ 1, 20 ] ]
 */
console.log(mergeInterval([
    {sequence: 1, start: 1, end: 20, action: "ADDED"}
  ], 7));


/**
 * 2. Sample input has more than 2 items
 * 
 * Expected result => [ [ 1, 31 ], [ 55, 89 ] ]
*/
console.log(mergeInterval([
    {sequence: 1, start: 1, end: 20, action: "ADDED"},
    {sequence: 2, start: 55, end: 58, action: "ADDED"},
    {sequence: 3, start: 60, end: 89, action: "ADDED"},
    {sequence: 4, start: 15, end: 31, action: "ADDED"},
    {sequence: 5, start: 10, end: 15, action: "ADDED"}
  ], 7))


/**
 * 3. Sample input has added and removed items
 * 
 * Expected result => [ [ 10, 31 ], [ 55, 89 ] ]
 */
console.log(mergeInterval([
    {sequence: 1, start: 1, end: 20, action: "ADDED"},
    {sequence: 2, start: 55, end: 58, action: "ADDED"},
    {sequence: 3, start: 60, end: 89, action: "ADDED"},
    {sequence: 4, start: 15, end: 31, action: "ADDED"},
    {sequence: 5, start: 10, end: 15, action: "ADDED"},
    {sequence: 6, start: 1, end: 20, action: "REMOVED"},
  ], 7))



/**
 * 4. Sample input has added and deleted items
 * 
 * Expected result => [ [ 1, 2 ], [ 3, 7 ] ]
 */
console.log(mergeInterval([
    {sequence: 1, start: 1, end: 6, action: "ADDED"},
    {sequence: 2, start: 5, end: 7, action: "ADDED"},
    {sequence: 3, start: 2, end: 3, action: "DELETED"}
  ], 7))


/**
 * 5. Sample input has added, removed and deleted items
 * 
 * Expected result => [ [ 10, 11 ], [ 13, 31 ], [ 55, 89 ] ]
 */
console.log(mergeInterval([
    {sequence: 1, start: 1, end: 20, action: "ADDED"},
    {sequence: 2, start: 55, end: 58, action: "ADDED"},
    {sequence: 3, start: 60, end: 89, action: "ADDED"},
    {sequence: 4, start: 15, end: 31, action: "ADDED"},
    {sequence: 5, start: 10, end: 15, action: "ADDED"},
    {sequence: 6, start: 1, end: 20, action: "REMOVED"},
    {sequence: 7, start: 11, end: 13, action: "DELETED"}
  ], 7))
  
  