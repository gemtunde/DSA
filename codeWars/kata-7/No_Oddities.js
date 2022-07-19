// Write a small function that returns the values of an array that are not odd.
// All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values ){
    // Return all non-odd values
    
    return values.filter((val,index)=> val % 2 ===0)
   }
   noOdds( [0,1]);
   noOdds( [0,1,3,4,5,6,7,8,9,2]);