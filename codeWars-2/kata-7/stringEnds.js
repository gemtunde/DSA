// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


function solution(str, ending){
  // TODO: complete
     let end = ending.length
   return str.substr(str.length-end).includes(ending) ? true : false
}

solution('abcde', 'cde') //, true);
//solution('abcde', 'abc') //, false);
//solution('samurai', 'ra') //false