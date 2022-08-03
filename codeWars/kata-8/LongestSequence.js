// given an unsorted array of integers, 
// return the length of the 
// longest consecutive elements sequence.
// e.g - input: nums= [100,4,200,1,3,2]
// output - 4

function LongestSequence(numbers){
let sortedNum = numbers.sort((x,y)=> x-y);
let count = 0;
for(let x=0; x < sortedNum.length; x++){
    currentNum = sortedNum[x] + 1;
    nextNum = sortedNum[x + 1]
    if(currentNum == nextNum){
       count +=1;
    }
}
return count 
}

console.log(LongestSequence([100,4,200,1,3,2]));
console.log(LongestSequence([100,4,200,12,13,101,102,103,104,105]));