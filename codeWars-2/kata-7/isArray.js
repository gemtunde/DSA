// DESCRIPTION:
// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

// Examples:

// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false




//arr lent === 0 --- true
//loop thru individual item/element in the array to check if its an arrray
// if each element is an array return true else return false

function arrCheck(value){
 let result = []
 if(value.length === 0) return true
  for(let i=0; i < value.length; i++){
  if(Array.isArray(value[i]) === true){
   result.push(true)}
   else{
    result.push(false)
   }
  // console.log(value[i])
  }
 return result.includes(false) ? false : true ;
    
}
//arrCheck([])//, true);
 // arrCheck([['string']])//, true);
  // arrCheck([[],{}])//, false);
//arrCheck([[1],[2],[3]])//, true);
 arrCheck(['A', 'R', 'R', 'A', 'Y'])//, false);


