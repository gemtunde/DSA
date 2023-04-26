// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.


  // Return all non-odd values
//1 array index divided by 2 with no remainder
// 2 push the result to a new array
//3 return it
function noOdds( values ){
 //1st option 
    return values.filter(val => val % 2 === 0)
  
  //2nd option
//    let result = [];
//    for(let i=0; i < values.length; i++ ){
//     if(values[i] % 2 === 0){
//       result.push(values[i])
//     }
//    }
//    return result ;
}



noOdds([0,1,2,3,4,5,6])