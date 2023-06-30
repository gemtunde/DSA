
//splits a string, objects into an array into an array

//EXAMPLE 1
// const str = '1234567';
// const res = Array.from(str).map(Number);
// //const res = str.split("").map(Number); // split can also do similar
// console.log(res)


//example 2
//remove duplicates from an array

const numbers = [1,2,1,2,1,2,3,4,2,3,4,5,4,3,2,4,4,5,6,7,7,6,5,7,8,8,8,9,9,9,4];

//use set to remove duplicates but it wont give you an array
 const res = new Set(numbers);
//use from to convert to array
 //const res = Array.from(new Set(numbers))
console.log(res)



