//some methods executes a given function/action on all the elements in the array and returns true if one or all the elements meets a certain condition
//if none meet the conditions, it returns false.

//EXAMPLE 1
// CHECK IF ALL THE ELEMENT IN THE ARRAY IS POSITIVE

const numbers = [1,2,3,4,5, 0];

const res = numbers.some(callBack);
function callBack(element){
    return element > 4
};
//returns true coz all the element are greater than 4
console.log(res)