// Find the smallest integer in the array
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

  function findSmallestInt(args){
    return args.sort((a,b)=> a-b)[0]
    //or use this 
   // let sort = args.sort((a,b)=>a-b);
    //return sort[0]
  };

   console.log(findSmallestInt([78,56,232,12,8]));
    console.log(findSmallestInt([78,56,232,12,18]));
    console.log(findSmallestInt([78,56,232,412,228]));
    console.log(findSmallestInt([78,56,232,12,0]));
    console.log(findSmallestInt([1,56,232,12,8]));
  

//best practice
 function findSmallestInt(args) {
    return Math.min(...args)
  }










