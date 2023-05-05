// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


function pigIt(str){
  //Code here
     let arr = str.split(" ");
    let result = []
    for(let i=0; i<arr.length; i++){
        if(!arr[i].includes("!") & !arr[i].includes("?")){
            //result.push(arr[i])
            let split = arr[i].split("");
            let a = split.slice(1).join("") + split[0] + "ay"
            result.push(a)
            
        }
        else {
            result.push(arr[i])
        }
        
    }
    return result.join(" ")
}

pigIt('Pig latin is cool');
pigIt('This is my string');