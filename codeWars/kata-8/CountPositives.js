// Given an array of integers.

// Return an array, where the first element is the count of
//  positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


function countPositivesSumNegatives(input) {
  // your code here
  let countPositive = [];
  let sumNegative = [];
  let zero = []
  let empty = [] || null
   let nothing = null;

  for(let i=0; i < input.length; i++){
  if(input[i] > 0){
    countPositive.push(input[i]);
  }   
  if(input[i] < 0){
    sumNegative.push(input[i]);
  }
  else {
    zero.push(input[i])
  } 
}
  if ( input == nothing ) return empty
  if (input.length ==0 ) return empty
  //if (!input) return empty
  let sumTotal = sumNegative.reduce((acc,sum)=> acc + sum,0);
  let positive = countPositive.length
   let answer = [positive, sumTotal];
    return answer;
    //return countPositive
}

  let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
  console.log(countPositivesSumNegatives(testData));
   // let expected = [10, -65];




