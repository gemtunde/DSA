// given an unsorted array of integers, 
// return the length of the 
// longest consecutive elements sequence.
// e.g - input: nums= [100,4,200,1,3,2]
// output - 4

function LongestSequence(numbers){
let sortedNum = numbers.sort((x,y)=> x-y);
//console.log(sortedNum)
let totalNum = [];
//let count = 0;
for(let x=0; x < sortedNum.length; x++){
    currentNum = sortedNum[x] + 1;
    nextNum = sortedNum[x + 1]
    if(currentNum == nextNum){
       //count +=1;
       totalNum.push(currentNum)
    }
}
return totalNum.length
}

console.log(LongestSequence([4,7,1,2,8,10,3]));
console.log(LongestSequence([0,-3,-5,-1,7,-2,-4,1,3]));
console.log(LongestSequence([0,3,7,2,5,8,4,6,0,2,1]));
// console.log(LongestSequence([7,4,9,1,3,2]));
// console.log(LongestSequence([4, 6, 9, 1, 2, 8, 5, 3, 0]));
// console.log(LongestSequence([0,3,7,2,5,8,4,6,0,1]));
// console.log(LongestSequence([3,0,1]));
//console.log(LongestSequence([100,4,200,12,13,101,102,103,104,105]));