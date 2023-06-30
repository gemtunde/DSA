
//fing the most repeated character in the string

//remove numbers using regex
//loop and count thru into objects
//use forloop to determine the highest value and save to a variable
//highest count
//hughest char
//occurance

//1st solution 0(n^2)

// function Repeated(s){
//   //  console.log(s)
//     let regex = /[a-z]/ig ;
//     let  letters= s.match(regex);
//     let highestCount = 0;
//     let highestLetter = null ;

//     for(let i=0; i<letters.length; i++){
//         let occurance = 0;
//         for(let j=i+1; j<letters.length; j++){
//             if(letters[i] === letters[j]) occurance++ ;
//         }
//           if(occurance > highestCount){
//               highestCount = occurance;
//               highestLetter = letters[i]
//           }          
//     }
  
//     return highestLetter
// }

//2nd solution  o(n)
function Repeated(s){

   let regex = /[a-z]/ig;
    let letterArr = s.match(regex);
    //console.log(letters)
    let letters = {};
    let highestCount = 0;
    let highestLetter = null ;
    for(let i=0; i < letterArr.length; i++){
        let letter = letterArr[i]
        let occurance = 0 ;
        if(letters[letter]){
            letters[letter]++
            occurance ++
        }else{
            letters[letter] = 1
            occurance = 1
        }
        if(occurance > highestCount){
            occurance = highestCount ; 
            highestLetter = letterArr[i]
        }
    }
    return highestLetter
}


Repeated("abcddefadaddc1234567812345578DDDDDDDDKKKKKKKKKKKKKKKKKKKK"); //d