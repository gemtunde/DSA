// A Narcissistic Number is a positive number which is the sum of its own digits, 
//each raised to the power of the number of digits in a given base. 
//In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
function narcissistic(value) {
    // Code me to return true or false
    const valueStr = `${value}`;
    const len = valueStr.length;
    return valueStr.split('')
    .reduce((acc, item)=> acc += Math.pow(+item,len),0 ) === value
    
  }

  console.log(narcissistic( 7 ) );
  console.log(narcissistic( 371 ) );