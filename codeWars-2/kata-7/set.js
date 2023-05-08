// In this kata you have to find whether same elements of the string are grouped together.

// Example

// Input	Output
// 112233	true
// 11223311	false

// Explanation
// In first example same elements are grouped together: (11)(22)(33), hence it should return true
// In the second example there are two different groups of 1's: (11)2233(11), hence it should return false

// ARRAYSFUNDAMENTALS



const isConsecutive = (str) => {
//Let's do it...
    let seen = new Set();
    let latest ;

    for(const char of str){
       // console.log(char)
        if(!seen.has(char)){
            seen.add(latest = char)
        }
        else if(latest !==char){
            return seen
        }
        //return true
        
    }
    return seen
}

//isConsecutive("112200") //, true);
isConsecutive("00123440055522")//, false