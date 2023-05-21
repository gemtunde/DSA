//every
//every methods executes a given function/action on all the elements in the array and returns true if all the elements meets a certain condition
//if one or more does not meet the conditions, it returns false.

//EXAMPLE 1
// CHECK IF ALL THE ELEMENT IN THE ARRAY IS POSITIVE

// const numbers = [1,2,3,4,5, 0];

// const res = numbers.every(callBack);
// function callBack(element){
//     return element >= 0
// };
// //returns true coz all the element are greater than 0
// console.log(res)

//EXAMPLE 2
const arrays = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    '12235'
];
const res = arrays.every(callBack);
function callBack(arr){
    return Array.isArray(arr)
}

console.log(res)
