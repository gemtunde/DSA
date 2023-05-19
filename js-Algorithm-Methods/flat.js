//creates a 1D array from multi-dimensional or nested array array

const arr = [1, [2, [3, [4]]]];

// this removes just 1 array, bcoz by default the value of argument or depth of array is 1
//const res = arr.flat();

// this removes 3 array, bcoz by default the value of argument or depth of array provided is 3
//const res = arr.flat(3);

// this removes an infinity number of arrays
const res = arr.flat(Infinity);

console.log(res)