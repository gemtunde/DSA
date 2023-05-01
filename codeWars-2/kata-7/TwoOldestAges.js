// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example (Input --> Output):

// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]


function twoOldestAges(ages){
  let result = ages.sort((a,b) => b - a);
    return [result[1], result[0]]

    //option
  //return ages.sort((a,b) => b - a).slice(-2);

}

  // twoOldestAges([1,5,87,45,8,8]);
   twoOldestAges([6,5,83,5,3,18]);

