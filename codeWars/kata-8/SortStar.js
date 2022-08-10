// You will be given a list of strings. You must sort it alphabetically 
// (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
    let sorted = s.sort()
    let firstWord = sorted[0].split('');
    let addAll = []
    for(let i=0; i<firstWord.length; i++){
        addAll.push(firstWord[i] + "***");        
    }
   let removeLastWord = addAll.pop()
     let firstLetter = removeLastWord.split('')
    return addAll.concat(firstLetter[0]).join('')
}

 //console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])) // 'b***i***t***c***o***i***n' );
 console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])) // 'a***r***e'); 

 //best practice/
    function twoSort(s) {
    return s.sort()[0].split('').join('***');
    }




