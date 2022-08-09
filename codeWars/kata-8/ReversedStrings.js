// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


function solution(str){
 // console.log(str)
  return str.split('').reverse().join('');
}

solution('world');
solution('hello');