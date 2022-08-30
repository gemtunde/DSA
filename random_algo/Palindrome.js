//check if a word or string is a palindrome
//palindrome is a word spelt forward as same as backwrad
//e.g level, civic, radar, rotor, madam, refer

 function palindrome(str){
     
     let arr1 = str.split('');
     let arr2 = str.split('').reverse();
     let arr3 = [];
    // return arr2
    for(let i =0; i<arr1.length; i++){
        if(arr1[i]===arr2[i]){
            arr3.push(arr1[i])
        }
        else{return false}
    }
     return true
  }

console.log(palindrome('level')); //true
console.log(palindrome('madam')); //true
//console.log(palindrome('lemon')); //false