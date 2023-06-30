//EXAMPLE 1
//option 1
// const numbers = [1,2,3,4,5,6] ;

// //option 1
// const even = numbers.filter(isEven)

// function isEven (value){
//   return value % 2 === 0
// };

// //option 2
// //const even = numbers.filter(number => number % 2 === 0)
// console.log(even)

// EXAMPLE 2
// const people = [
//     {
//         name : "Tunde",
//         age :35
//     },
//     {
//         name : "BabaTunde",
//         age :75
//     },
//     {
//         name : "OlaTunde",
//         age :15
//     },
//     {
//         name : "OmoTunde",
//         age :5
//     },
//     {
//         name : "IsaacTunde",
//         age :25
//     },
// ];
//option1
// const age = people.filter(person => person.age >= 25);


//option 2

//const age = people.filter(callback);
// function callback(person){
//     return person.age >= 25
// }
// console.log(age)


// EXAMPLE 3
// USING FILTER TO REMOVE DUPLICATES
// indexOf returns only the first occurence of an array
// most javascript methods always returns 3 parameters which includes index, value and array

const duplicates = [1,2,3,4,5,2,3,4, 5,1,3,6,7,8,6,6,7] ;
const removeItem = duplicates.filter((value, index, arr) => arr.indexOf(value) === index) ;

console.log(removeItem);

