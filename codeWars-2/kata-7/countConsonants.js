// Complete the function that takes a string of English-language text and returns the number of
//  consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.


function consonantCount(str) {

  let arr = [];
    let vocals = "bcdfghjklmnpqrstvwxyz";
    for(let i=0; i < str.length; i++){
        if(vocals.includes(str[i].toLowerCase())){
            arr.push(str[i])
        }
    }
    return arr.length ;
}

